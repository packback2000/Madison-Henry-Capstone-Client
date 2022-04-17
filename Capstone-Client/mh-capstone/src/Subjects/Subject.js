import React from "react";
import axios from "axios";

export default function Subject(props) {
    
    console.log(props)
    return(
        <section>
            <h1>{props.title}</h1>
        </section>
    )
}