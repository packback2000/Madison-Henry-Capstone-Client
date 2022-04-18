import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Styles/SubjectDetails.css';

export default class SubjectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjectData: []
        }
    }

    fetchSubjectDetails = () => {
        axios
        .get('http://localhost:5051/subjects')
        .then((response) =>
        this.setState({
            subjectData: response.data
        })
        )
    }

    componentDidMount() {
        this.fetchSubjectDetails();
    }

    render() {
        const displayData = this.state.subjectData.map((info) => {
            return(
                <table>
                    <tbody>
                            <tr>
                                <td>
                                    <Link to={`/subjects/${info.subject_id}`}>
                                        {info.title}
                                    </Link>
                                </td>
                            </tr>
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
}