import axios from "axios";
import React from "react";
import Comment from "./Comment";

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
            commentDetails: []
        }
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
        let postID = this.props.post_id;
        axios
        .get('http://localhost:5051/posts/' + postID + '/comments')
        .then(response => {
            let details = response.data
            this.setState({
                commentDetails: details
            })
        })
        console.log(this.state.commentDetails)
    }

    componentWillUnmount() {
        console.log('Component Will Unmount')
    }

    render() {
        return(
            <section className="comment-section">
                {this.state.commentDetails.map((comment) => {
                    <div>
                    <Comment 
                        post_id = {comment.post_id}
                        body = {comment.body}
                    />
                    </div>
                })}
            </section>
        )
    }
}