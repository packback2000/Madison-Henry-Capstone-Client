import React from "react";
import axios from "axios";

export default class AddPost extends React.Component {
    state = {
        addPost: {},
        title: '',
        body: '',
        subject: ''
    }


    handleChange = (event) => {
        console.log(this)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    redirect = () => {
        window.location.href = "/subjects";
      };

      handleSubmit = (event) => {
          event.preventDefault();

          axios.post('http://localhost:5051/posts', {
              title: this.state.title,
              body: this.state.body,
              subject_id: this.props.subject_id
          });
      }

      handleDelete = () => {
          let post_id = this.props.post_id
          axios.delete('http://localhost:5051/posts')
      }

      render(){
          return(
              <form className="postForm" onSubmit={this.handleSubmit}>
                  <label>Title</label>
                  <input type='text' name='title' onChange={this.handleChange} value={this.state.title} />

                  <label>Body</label>
                  <input type='text' name='body' onChange={this.handleChange} value={this.state.body} />

                  <button type="submit"/>

              </form>
          )
      }
          

}