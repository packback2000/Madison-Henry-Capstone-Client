import React from 'react';
import axios from 'axios';

export default class CreatePost extends React.Component {
    
    state = {
        title: '',
        body: '',
        subject_id: this.props.subject_id
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
        event.preventDefault();

        axios.post('http://localhost:5051/posts', {
            title: this.state.title,
            body: this.state.body,
            subject_id: this.props.subject_id
        });
    };

    handleDelete = (event) => {
        let postID = this.props.postID
        axios.delete('http://localhost:5051/posts/' + postID)
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

                <label>Post Title</label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.postTitle}
                  placeholder="Title"
                />

                <label>Post Body</label>
                <input
                  type="text"
                  name="body"
                  onChange={this.handleChange}
                  value={this.state.postBody}
                  placeholder="Body"
                />

                <button className='submit' type='submit'>Submit</button>

                <button onClick={this.handleDelete}>Delete</button>

            </form>
        )
    }
    
}