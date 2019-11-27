//Review page
import React from "react";
import Card from "./Card";
import sentences from "../Data/sentences";

const Review = () => {
  return (
    <div>
      <header>Review Page</header>
      <Card data={sentences[0]} />
    </div>
  );
};

export default Review;
