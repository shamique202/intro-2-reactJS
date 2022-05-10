import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

function Card2() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage
        imageUrl={
          "https://images.unsplash.com/photo-1498712964741-5d33ab9e5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=600"
        }
      />
      <CardBody name={"santorini"} />
    </div>
  );
}

export default Card2;
