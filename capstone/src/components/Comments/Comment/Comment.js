import React from "react";
import { Link } from "react-router-dom";

export default function Comment(props) {

    return(
        <section className="comments">
            <p>{props.body}</p>
        </section>
    )
}