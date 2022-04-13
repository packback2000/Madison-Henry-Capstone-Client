import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPost from "../AddPost";
import PostList from "../PostList/PostList";


export default class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentDetails: [],
            postDetails:[],
            allData: [],
            subjectData: [],
            subjectTitle: '',
            id: '',
            post_id: '',
            post_body: '',
            post_title: '',
            postSubjectID: '',
            currentSubject: {}
        }
    }

    fetchDetails = () => {
       let subjectID = this.props.subjectID
        axios
        .get('http://localhost:5051/subjects/' + subjectID + '/posts')
        .then((response) => {
            console.log(response)
            this.setState({
                postDetails: response.data,
                post_id: response.data.post_id,
                post_body: response.data.body,
                post_title: response.data.title,
                subject_id: response.data.subject_id
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        let subjectID = this.props.subjectID
        axios
        .get('http://localhost:5051/subjects/' + subjectID)
        .then((response) => {
            let mainPostData = response.data
            if (prevProps.subject_id !== this.props.subjectData) {
                this.setState({
                    currentSubject: mainPostData
                })
            }
        })
    }

    componentDidMount() {
        this.fetchDetails();
    }

    

  render() {
    
    const displayData = this.state.postDetails.map((info) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <Link className="post" to={`/subjects/${info.subject_id}/posts/${info.post_id}`}>
                            <td>{info.title}</td>
                            <td>{info.body}</td>
                        </Link>
                    </tr>
                </tbody>
            </table>
                )
            })
    

      return (
          <section className="postDetails">
            
            <div className="post-details__list">
                <PostList />

                <div>{displayData}</div>
                
            </div>

          </section>
          
      )
  }

}