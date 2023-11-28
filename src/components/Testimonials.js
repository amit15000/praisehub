import React from "react";
import Card from "./Card";

function Testimonials(props) {
  let reviews = props.reviews[0];
  return (
    <div>
      <Card review={reviews}></Card>
    </div>
  );
}

export default Testimonials;
