import React from "react";
import "./shipList.css";

const shipList = props => (
  <ul className="shipList">
    {props.shipList.map(ship => {
      return (
        <li
          className={
            ship.ship_id === props.currentShipId ? "currentShipOnList" : ""
          }
          onClick={() => props.onShipClick(ship.ship_id)}
        >
          {ship.ship_name}
        </li>
      );
    })}
  </ul>
);

export default shipList;
