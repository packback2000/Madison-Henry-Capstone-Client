import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SubjectList from "../SubjectList/SubjectList";

function Subject(props) {
 
    return (
        <section className="individual-subject">
            <Link className="Subject" to={`/subjects/${props.id}`}>
                <p className="subject-title" id={props.id}>{props.title}</p>
            </Link>
        </section>
    )
}

export default Subject;