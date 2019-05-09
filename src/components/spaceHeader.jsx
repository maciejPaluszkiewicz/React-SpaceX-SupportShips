import React from "react";
import "./spaceHeader.css";
import logo from "../images/spaceXlogo.png";

const spaceHeader = () => (
  <div className="headerWithLogo">
    <img src={logo} />
    <h1 className="spaceHeader">SpaceX Support Ships</h1>
  </div>
);

export default spaceHeader;
