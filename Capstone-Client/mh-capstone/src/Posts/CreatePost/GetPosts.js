import React from 'react';
import axios from 'axios';
import Post from '../Post';
import CreatePost from './CreatePost';

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
            subject_name: ''
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
            this.setState({
                postDetails: details,
            })
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

            <p>{this.state.subject_name}</p>
            <p>Number of Posts: {this.state.postDetails.length}</p>

            {this.state.data.map((post) => 
                <Post 
                    posttitle={post.title}
                    postbody={post.body}
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