import React from "react";
import axios from "axios";
import SubjectDetails from "./SubjectDetails";
import Subject from "./Subject";

export default class SubjectList extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        data: [],
        title: '',
        id: '',
        currentSubject: {}
    }}

    fetchSubjectDetails() {
        axios
        .get('http://localhost:5051/subjects')
        .then((results) => {
            let subjectData = results.data
            this.setState({
                data: subjectData,
                title: subjectData.title,
                subject_id: subjectData.id
            })
        })
    }

    componentDidMount() {
        this.fetchSubjectDetails();
        let subjectIdentification = this.state.subject_id
        axios
        .get('http://localhost:5051/subjects/' + subjectIdentification)
        .then((response) => {
            let mainSubjectData = response.data
            this.setState({
                curentSubject: mainSubjectData
            })
        })
        console.log(this)
    }

    componentDidUpdate(prevProps, prevState) {
        let subjectIdentification = this.state.subject_id
        axios
        .get('http://localhost:5051/subjects/' + subjectIdentification)
        .then(response => {
            let mainSubjectData = response.data
            if(prevState.currentSubject._subject_id !== this.state.subject_id) {
                this.setState({
                    currentSubject: mainSubjectData
                })
            }
        })
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
    }

    render() {

        return(
            <section>
                <Subject
                    title={this.state.title}>
                </Subject>

            {this.state.currentSubject.map((info) => {
                <SubjectDetails
                title={info.title}
                id={info.subject_id}
                />
                    })}
                
            </section>
        )
    }

}