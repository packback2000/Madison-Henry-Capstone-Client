import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../Comments/LikeButton/LikeButton";
import '../Posts/Post.css'

export default function Post(props) {

    const formatMyDate = (timestamp) => {
        const date = new Date(timestamp)
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const formattedDate = day + "/" + month + "/" + year;
        return formattedDate;
    }


        if(`/posts/${props.postID}/comments` !== `/posts/undefined/comments`) {
            return(
                <section className="post-section">
                    <Link to={`/posts/${props.postID}/comments`} className='main-post__link'>
                        <div className="main-post__data">
                        <p className="title">{props.title}</p>
                            <div className="name-date">
                               <p className="username">{props.username}</p>
                                <p className="date">{formatMyDate(props.posttime)}</p>
                            </div>
                        <p className="body">{props.body}</p>
                        
                        </div>
                    </Link>
                    <LikeButton 
                        postID = {props.postID}
                    />

    
                    
                </section>
            )
        }
    

}