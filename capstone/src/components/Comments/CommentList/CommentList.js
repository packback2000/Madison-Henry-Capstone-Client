import React from "react";
import axios from "axios";
import CommentDetails from "../CommentDetails/CommentDetails";


export default class CommentList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentData: [],
            currentPost: {},
            postDetails: {},
            postID: '', 
            data: []
        }
    }

    fetchCommentDetails() {
       axios.get('http://localhost:5051/posts')
       .then((results) => {
           const allData = results.data
           this.setState({
               data: allData
           })
       })
    }

    componentDidMount() {
        this.fetchCommentDetails();
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

      render() {
          return (
              <section className="comment-list">
                  {this.state.data.filter((elem) =>  {
                  if(elem.post_id === this.state.postID){
                  {this.state.data.map((elem) => 
                    <CommentDetails
                        commentBody={elem.body}
                        commentID={elem.comment_id}
                        postID = {elem.post_id}   
                        subjectID={elem.subject_id}
                        key={elem.comment_id}
                        />
                  )}}
                  }
                  )}
              </section>
          )
      }


}