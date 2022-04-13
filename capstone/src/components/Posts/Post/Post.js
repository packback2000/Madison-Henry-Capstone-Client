import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
 
    return (
        <section className="individual-post">
            <Link className="post" to={`/subjects/${props.subject_id}/posts/${props.post_id}`}>
                <p className="post-title" id={props.id}>{props.title}</p>
                <p>{props.body}</p>
            </Link>
        </section>
    )
}

export default Post;