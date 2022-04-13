import React from "react";
import axios from "axios";
import Subject from "../Subject/Subject";
import Post from "../Post/Post";
import CommentList from "../CommentList/CommentList";
import SubjectDetails from "../SubjectDetails/SubjectDetails";

export default class SubjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentSubject: {},
            subjectDetails: []
        }
    }

    fetchSubjectDetails() {
        axios.get('http://localhost:5051/subjects')
        .then((results) => {
            const allData = results.data
            this.setState({
                data: allData
            })
        })
    }

    componentDidMount() {
        this.fetchSubjectDetails();
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }

    render () {
        return (
            <section className="subject-list">
               
               <h1>Home</h1>

                <section className="subjects">
                    {this.state.data.map((elem) =>
                        <Subject
                            key={elem.subject_id}
                            id = {elem.subject_id}
                            title={elem.title}
                        />
                    )} 
                    </section>
            </section>
        )
    }
}