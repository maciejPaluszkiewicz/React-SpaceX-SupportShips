import React from "react";
import "./singleShip.css";

const singleShip = props => (
  <div className="singleShip">
    <p>
      This is singleShip const reporting. I'm {props.singleShip.ship_name} and
      ma id is {props.singleShip.ship_id}.
    </p>
  </div>
);

export default singleShip;
