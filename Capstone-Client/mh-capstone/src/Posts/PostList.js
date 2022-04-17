import { useState } from "react";
import React from 'react';
import axios from 'axios';
import Post from "./Post";

export default function PostList(props) {

    const [post, setPost] = useState('');

    const formHandler = (event) => {
        event.preventDefault();
        const formElement = event.target;
        const titleFromForm = formElement.title.value;
        const bodyFromForm = formElement.body.value;
        let subjectID = props.currentPostDetails.subject_id
        axios.post('http://localhost:5051/posts', {
            title:titleFromForm,
            body: bodyFromForm,
            subject_id: subjectID
        })
        .then((response) => {
            console.log(response.data)
            })
    }

    return(<section>
            <p key={props.subject_id}>
                {props.title}
            </p>
           
    </section>
    )
}
