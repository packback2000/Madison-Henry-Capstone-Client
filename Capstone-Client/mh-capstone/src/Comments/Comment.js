import React from "react";
import CommentLikeButton from "./LikeButton/CommentLikeButton";
import './Comment.css'

export default function Comment(props) {
    console.log(props)

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }

    return (
        <div className='comment'>
            <div className="comment-elements">
                <p>{props.username}</p>
                <p>{props.body}</p>
                <p>{formatMyDate(props.timestamp)}</p>
            </div>
            
            <CommentLikeButton 
                comment_id = {props.comment_id}
                likes = {props.likes}
            />


        </div>
    )
}