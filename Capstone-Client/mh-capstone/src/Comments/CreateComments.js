import axios from "axios";
import React from "react";

export default class CreateComment extends React.Component {
    state = {
        body: '',
        post_id: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    redirect = () => {
        window.location.href='/subjects'
    };

    handleSubmit = (event) => {
        axios.post('http://localhost:5051/comments', {
            body: this.state.body,
            post_id: this.props.post_id
        });
    };

    render() {
        return(
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment</label>
                    <input type='text'
                        name='body'
                        onChange={this.handleChange}
                        value={this.state.body}
                        />

                    <button type="Submit">Submit Comment</button>
                </form>
            </section>
        )
    }
}