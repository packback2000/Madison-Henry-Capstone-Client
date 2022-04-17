import React from "react";
import axios from "axios";
import CreatePost from './CreatePost';
import { Link } from "react-router-dom";

export default class PostDetails extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            subjectData: [],
            commentData: []
        }
    }

    fetchSubjectDetails = () => {
        let subject_id = this.props.subjectID
        axios
        .get('http://localhost:5051/subjects/'+ subject_id)
        .then((response) => {
            this.setState({
            subjectData: response.data
        })}
        )
    }

    componentDidMount() {
        this.fetchSubjectDetails();
        let subject_id = this.props.subjectID
        axios
        .get('http://localhost:5051/subjects/'+ subject_id + '/posts')
        .then((response) => {
            this.setState({
            postData: response.data
        })}
        )
        axios.post('http://localhost:5051/posts', {
            title: this.state.title,
            body: this.state.body,
            subject_id: this.props.subjectID
        });
    }

    render() {
       

        const displayData = this.state.postData.map((info) => {
            return(
                <table>
                    <tbody>
                    <Link to={`/subjects/${info.subject_id}`}>
                        <tr>
                            
                            <td>{info.title}</td>
                            <td>{info.body}</td>

                           
                        </tr>
                        </Link>
                        <section><CreatePost
                subjectID={info.subject_id}
                 /></section>
                    </tbody>
                </table>
               
            )
        })
        return(
            <section>

                {displayData}

                

            </section>

        )
    }
    */
}