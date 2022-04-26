import axios from "axios";
import React, { useState } from "react";

function CommentLikeButton(props) {

  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [newlikes, setNewLikes] = useState(0);
  
 const increaseLikes = () => {
    setNewLikes(newlikes +1)
     axios
     .patch(`http://localhost:5051/comments/` + props.comment_id, {
         likes: newlikes
     })
 }


  return (
    <button
      onClick={(event) => {
        setLiked(!liked);
        setClicked(true);
        increaseLikes()
      }}
      onAnimationEnd={() => setClicked(false)}
    >
      <div className="like-button">
        <span>Like</span> 
        <p>{newlikes}</p>
      </div>
    </button>
  );

};

export default CommentLikeButton;