import React from "react";
import "./shipList.css";

const shipList = props => (
  <div className="shipList">
    {props.shipList.map(ship => {
      return <p>{ship.name}</p>;
    })}
  </div>
);

export default shipList;
