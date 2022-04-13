import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
 
    return (
        <section className="individual-subject">
            <Link className="Subject" to={`/posts/${props.id}`}>
                <p className="subject-title" id={props.id}>{props.title}</p>
                <p>{props.body}</p>
            </Link>
        </section>
    )
}

export default Post;