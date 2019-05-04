import React from "react";
import "./spaceHeader.css";
import logo from "../images/SGC-logo.png";

const spaceHeader = () => (
  <div className="headerWithLogo">
    <img src={logo} />
    <h1 className="spaceHeader">Hello Space World!</h1>
  </div>
);

export default spaceHeader;
