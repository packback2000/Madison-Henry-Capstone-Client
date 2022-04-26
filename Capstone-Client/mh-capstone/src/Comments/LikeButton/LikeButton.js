import axios from "axios";
import React, { useState } from "react";
import '../LikeButton/LikeButton.css'

function LikeButton(props) {

  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [newlikes, setNewLikes] = useState(0);
  const [numberOfLikes, setnumberOfLikes] = useState(null)
  
 const increaseLikes = () => {
    setNewLikes(newlikes +1)
     axios
     .patch(`http://localhost:5051/posts/` + props.postID, {
         likes: newlikes
     })
 }

 const postData = () => {
     axios
     .get(`http://localhost:5051/posts/` + props.postID)
     .then(response => {
         setnumberOfLikes(response.data.likes)
     })
 }


  return (
    <button
      onClick={(event) => {
        setLiked(!liked);
        setClicked(true);
        increaseLikes()
        postData();
      }}
      onAnimationEnd={() => setClicked(false)}
      className='button'
    >
      <div className="like-button">
        <span>Like</span> 
        <p>{numberOfLikes}</p>
      </div>
    </button>
  );

};

export default LikeButton;