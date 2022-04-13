import React from "react";
import axios from "axios";

export default class CommentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentDetails: [],
            postDetails: [],
            post_id: '',
            comment_id: '',
            subject_id: '',
            currentPost: {}
        }
    }

    fetchCommentDetails = () => {
        let postID = this.props.postID
        axios
        .get('http://localhost:5051/posts/' + postID)
        .then((response) => {
            this.setState({
                postDetails: response.data
            })
        })
        axios
        .get('http://localhost:5051/posts/' + postID + '/comments')
        .then((response) => {
            this.setState({
                commentDetails: response.data
            })
        })
    }

    componentDidMount() {
        this.fetchCommentDetails();
    }

    componentDidUpdate(prevProps, prevState) {
        let postID = this.props.post_id
        axios
        .get('http://localhost:5051/posts/' + postID)
        .then((response) => {
            let mainPost = response.data
            if(prevProps.post_id !== this.props.post_id) {
                this.setState({
                    currentPost: mainPost
                })
            }
        })
    }

    render() {
        const displayCommentData = this.state.commentDetails.map((info) => {
            return(
                <table>
                    <tbody>
                        <tr>
                            <td>{info.body}</td>
                        </tr>
                    </tbody>
                </table>
            )
        })

        return(
            <section className="comment-list">
                <div>
                    {displayCommentData}
                </div>
            </section>
        )

    }
}