import React from "react";
import axios from "axios";
import PostDetails from '../PostDetails/PostDetails';
import AddPost from "../AddPost";

export default class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentSubject: {},
            subjectDetails: [],
            subjectID: ''
        }
    }

    fetchPostDetails() {
        axios.get('http://localhost:5051/subjects')
        .then((results) => {
            const allData = results.data
            this.setState({
                data: allData,
            })
        })
    }

    componentDidMount() {
        this.fetchPostDetails();
        console.log(this)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    render () {
       
        return (
            <section className="post-list">
                <div>
                
                    {this.state.data.map((elem) =>
                        <PostDetails
                            key={elem.subject_id}
                            subjectID = {elem.subject_id}
                            subjecttitle={elem.title}
                        />
                        )}
                     
                </div>
            </section>
        )
    }
}