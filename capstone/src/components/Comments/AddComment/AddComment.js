import React from "react";
import axios from "axios";

export default class AddComment extends React.Component {
    state = {
        addComment: {},
        body: ''
    }

    handleChange = (event) => {
        console.log(this.props)
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    redirect = () => {
        window.location.href = "/subjects";
      };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5051/comments', {
            body: this.state.body,
            post_id: this.props.postID,
            subject_id: this.props.subjectID
        });
    }

    render() {
        return(
            <form className="comment-form" onSubmit={this.handleSubmit}>

                
            </form>
        )
    }

}

/*
<label>Text</label>
                <input type='text' name='body' onChange={this.handleChange} value={this.state.body} />

                <button type="submit" />
*/