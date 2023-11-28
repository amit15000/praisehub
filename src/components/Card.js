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
          <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px] "></div>
        </div>
      </div>
      <div className=" text-center mt-7 ">
        <p className=" font-bold text-2xl capitalize">{review.name}</p>
      </div>
      <div className=" text-center mt-7 ">
        <p className=" text-violet-300 uppercase text-small">
          {review.designation}
        </p>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" text-violet-400 mt-5 ">
          <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className="text-slate-500">{review.comment}</div>
        <div className=" text-violet-400   mt-5 ">
          <FaQuoteRight></FaQuoteRight>
        </div>
      </div>
    </div>
  );
}

export default Card;
