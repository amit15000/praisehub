import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
function Card(props) {
  let review = props.review;
  return (
    <div>
      <div className=" flex flex-col md:relative">
        <div className=" absolute top-[-7rem] z-10 mx-auto ">
          <img
            className=" aspect-square rounded-full w-[140px] h-[140px] z-25 "
            src={review.profilePicture}
            alt="profile_picture"
          ></img>
        </div>
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
