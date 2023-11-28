import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
function Card(props) {
  let review = props.review;
  return (
    <div>
      <div>
        <img src={review.profilePicture} alt="profile_picture"></img>
      </div>
      <div>
        <p>{review.name}</p>
      </div>
      <div>
        <p>{review.designation}</p>
      </div>
      <div>
        <p>{review.designation}</p>
      </div>
      <div>
        <FaQuoteLeft></FaQuoteLeft>
      </div>
      <div>{review.comment}</div>
      <div>
        <FaQuoteRight></FaQuoteRight>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
}

export default Card;
