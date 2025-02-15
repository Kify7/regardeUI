import React from "react";
import "./comments.scss";
import SingleComment from "./SingleComment";

function Comments(props) {
  let allReviews;
  if (props.reviews) {
    allReviews = props.reviews.map((review, index) => (
      <SingleComment key={index} review={ review}/>
    ));
  }

  return (
    <section className="comments">
      <h5>Comentarios</h5>
      <div className="commentsList">
        {allReviews}
      </div>
    </section>
  );
}

export default Comments;
