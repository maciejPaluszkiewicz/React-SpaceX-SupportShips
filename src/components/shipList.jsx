import React from "react";
import "./shipList.css";

const shipList = props => (
  <ul className="shipList">
    {props.shipList.map(ship => {
      return (
        <li onClick={() => props.onShipClick(ship.ship_id)}>{ship.name}</li>
      );
    })}
  </ul>
);

export default shipList;
