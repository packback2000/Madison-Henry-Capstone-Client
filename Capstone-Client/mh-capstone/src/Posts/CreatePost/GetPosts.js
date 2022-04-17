import React from 'react';
import axios from 'axios';
import Post from '../Post';

export default class GetPosts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            currentSubject: {},
            currentPost: {},
            postDetails: [],
            post: '',
            title: '',
            id: '',
            subject: '',
            body: ''
        }
    }

    fetchPostDetails() {
        axios
        .get('http://localhost:5051/posts')
        .then((response) => {
            const postData = response.data;
            this.setState({
                data: postData,
            })
        })
    }

    componentDidMount() {
        this.fetchPostDetails();
        let subjectID = this.props.subject_id;
        axios
        .get('http://localhost:5051/subjects/' + subjectID + '/posts' )
        .then(response => {
            let details = response.data
            this.setState({
                postDetails: details
            })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        let subjectID = this.props.subject_id;
        axios
        .get('http://localhost:5051/subjects/' + subjectID + '/posts' )
        .then(response => {
            let mainPostData = response.data
            if (prevProps.subject_id !== subjectID) {
                this.setState({
                    currentPost: mainPostData,
                })
            }
        })
        }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    render() {
        return(
            <section key={this.state.currentSubject.key} className='postList'>
                {this.state.postDetails.map((post) =>
                <div>
                    <Post
                        title = {post.title}
                        body = {post.body}
                        subjectID = {post.subject_id}
                        postID = {post.post_id}
                    />
                </div>
                )}
                
            </section>
        )
    }
}