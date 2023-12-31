import React, { useState } from "react";
import Card from "./Card";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Testimonials(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  const leftShiftHandler = () => {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };
  return (
    <div className="w-[85vw] md:2-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-lg">
      <Card review={reviews[index]}></Card>
      <div className="text-violet-400 font-bold gap-3 text-3xl">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <HiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold "
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
