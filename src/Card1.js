import React from "react";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

function Card1() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage
        imageUrl={
          "https://images.unsplash.com/photo-1536514072410-5019a3c69182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
        }
      />
      <CardBody name={"mykonos"} />
    </div>
  );
}

export default Card1;