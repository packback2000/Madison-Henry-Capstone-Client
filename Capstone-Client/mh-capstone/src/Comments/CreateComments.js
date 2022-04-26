import axios from "axios";
import React from "react";

export default class CreateComment extends React.Component {
    state = {
        body: '',
        post_id: '',
        username: ''
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
            post_id: this.props.post_id,
            name: this.state.username
        });
    };

    render() {
        return(
            <section>
                <form onSubmit={this.handleSubmit}>

                <label>Username</label>
                <input 
                    type='text'
                    name='username'
                    onChange={this.handleChange}
                    value={this.state.username}
                    placeholder="username"
                    />

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