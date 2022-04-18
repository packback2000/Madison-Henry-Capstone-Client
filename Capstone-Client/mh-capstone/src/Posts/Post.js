import React from "react";
import { Link } from "react-router-dom";

export default function Post(props) {
    return(
        <section>
            <Link to={`/posts/${props.postID}/comments`}>
                <p>{props.title}</p>
                <p>{props.body}</p>
            </Link>
        </section>
    )
}