import React from "react";
import axios from "axios";
import AddPost from "../AddPost";


export default class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentDetails: [],
            postDetails: [],
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
        .get('http://localhost:5051/subjects/' + subjectID)
        .then((response) => {
            this.setState({
                subjectTitle: response.title,
                subjectData: response.data
            })
        })
        axios
        .get('http://localhost:5051/subjects/' + subjectID + '/posts')
        .then((response) => {
            this.setState({
                postDetails: response.data,
                post_id: response.data.post_id,
                post_body: response.data.body,
                post_title: response.data.title,
                postSubjectID: response.data.subject_id
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

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

  render() {
    const displayData = this.state.postDetails.map((info) => {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>{info.title}</td>
                        <td>{info.body}</td>
                    </tr>
                </tbody>
            </table>
        )
    })

      return (
          <section className="postDetails">
            
            <div>{displayData}</div>

          </section>
          
      )
  }

}