import axios from "axios";
import React from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComments";
import "./CommentList.css";
import { Link } from "react-router-dom";

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
            postTitle: '',
            post_id: '',
            postUsername: ''
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
                postTitle: postDetails.title,
                post_id: postDetails.post_id,
                postUsername: postDetails.name
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
                <Link to={`/${this.state.postUsername}`}>
                    <p>{this.state.postUsername}</p>
                </Link>
                <p>{this.state.postTitle}</p>
                <p>{this.state.postBody}</p>
                <hr/>
                {this.state.commentDetails.map((comment) => 
                    <Comment 
                        body = {comment.body}
                        post_id = {comment.post_id}
                        comment_id = {comment.comment_id}
                        likes={comment.likes}
                        timestamp = {comment.lastUpdated}
                        username={comment.name}
                    />
                )}

                <CreateComment
                    post_id = {this.state.post_id}
                />
            </section>
        )
    }
}