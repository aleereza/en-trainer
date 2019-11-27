import React from "react";
import Card from "./Card";
import sentences from "../Data/sentences";

const Body = () => {
  return (
    <div>
      <Card data={sentences[0]} />
    </div>
  );
};

export default Body;
