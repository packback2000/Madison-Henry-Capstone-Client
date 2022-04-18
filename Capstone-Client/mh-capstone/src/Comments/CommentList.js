import axios from "axios";
import React from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComments";

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPost: {},
            currentComment: {},
            comment: '',
            body: '',
            comment_id: '',
            commentDetails: [], 
            postBody: '',
            postTitle: ''
        }
    }

    fetchPostDetails() {
        let postData = window.location.pathname.split('/comments')[0]
        axios
        .get('http://localhost:5051' + postData)
        .then((response) => {
            let postDetails = response.data
            this.setState({
                currentPost: postDetails,
                postBody: postDetails.body,
                postTitle: postDetails.title
            })
        })
    }

    fetchCommentDetails() {
        axios
        .get('http://localhost:5051/comments')
        .then((response) => {
            const commentData = response.data;
            this.setState({
                data: commentData,
            })
        })
    }

    componentDidMount() {
        this.fetchCommentDetails();
        this.fetchPostDetails();
        axios
        .get('http://localhost:5051' + window.location.pathname)
        .then(response => {
            let details = response.data
            this.setState({
                commentDetails: details
            })
        })
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    render() {
        return(
            <section className="comment-section">
                <p>{this.state.postTitle}</p>
                <p>{this.state.postBody}</p>
                <hr/>
                {this.state.commentDetails.map((comment) => 
                    <Comment 
                        body = {comment.body}
                        post_id = {comment.post_id}
                    />
                )}
                
                <CreateComment/>
            </section>
        )
    }
}