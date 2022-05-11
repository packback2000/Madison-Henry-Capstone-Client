import React from 'react';
import axios from 'axios';
import Post from '../Post';
import CreatePost from './CreatePost';
import '../CreatePost/GetPosts.css';

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
            body: '',
            subject_name: '',
            liked: null,
            setLiked: null,
            clicked: false,
            setClicked: false
        }
    }
      
    fetchSubjectDetails() {
        axios
        .get('http://localhost:5051' + window.location.pathname)
        .then((response) => {
            let subjectDetails = response.data
            this.setState({
                subject_name: subjectDetails.title
            })
        })
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
        this.fetchSubjectDetails();
        axios
        .get('http://localhost:5051' + window.location.pathname + '/posts' )
        .then(response => {
            let details = response.data
            if (window.location.href !== 'posts/undefined/comments') {
            this.setState({
                postDetails: details,
            })
        }
        else {
            this.setState({
                postDetails: ''
            })
        }
            })
            this.setState({
              subject:  window.location.pathname.split('/')[2], 
              subject_name: window.location.pathname.split('/')[2]
            })
           
    }

    


    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    render() {
        return(
            <section className='post-list'>
            <p className='subject-name'>{this.state.subject_name}</p>
            <p className='number-of-posts'>Number of Posts: {this.state.postDetails.length}</p>
            {this.state.data.map((post) => 
                <Post 
                    posttitle={post.title}
                    postbody={post.body}
                    posttime={post.lastUpdated}
                    username={post.username}
                />
            )}
                {this.state.postDetails.map((post) =>
                <div key={this.state.currentSubject.key} >
                    <Post
                        key={post.post_id}
                        title = {post.title}
                        body = {post.body}
                        subjectID = {post.subject_id}
                        postID = {post.post_id}
                        posttime={post.lastUpdated}
                        username={post.name}
                    />
                </div>
                )}
                <hr/>
                <CreatePost
                    subject_id = {this.state.subject}
                />
            </section>
        )
    }
}