import React from "react";
import { Link } from "react-router-dom";
import CommentList from "../Comments/CommentList";


export default function Post(props) {
    return(
        <section>
            <Link to={`/posts/${props.postID}/comments`}>
                <p>{props.title}</p>
                <p>{props.body}</p>
            </Link>

            <CommentList 
                post_id = {props.postID}
            />
        </section>
    )
}