import React from "react";
import "./shipList.css";
const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";

const shipList = props => {
  let currentIndex;
  let prevId;
  let nextId;
  if (props.currentShipId) {
    currentIndex = props.shipList.findIndex(
      ship => ship.ship_id === props.currentShipId
    );
    prevId =
      currentIndex !== 0
        ? props.shipList[currentIndex - 1].ship_id
        : props.shipList[props.shipList.length - 1].ship_id;
    nextId =
      currentIndex !== props.shipList.length - 1
        ? props.shipList[currentIndex + 1].ship_id
        : props.shipList[0].ship_id;
  }

  const handleKeyDown = event => {
    event.stopPropagation();
    if (event.key === ARROW_DOWN) {
      props.onShipClick(nextId);
    }
    if (event.key === ARROW_UP) {
      props.onShipClick(prevId);
    }
  };
  //  function(){
  //        return(
  //            <div>
  //              <input type="text" id="one" onKeyPress={this.handleKeyPress} />
  //           </div>
  //        );
  //   }

  return (
    <ul className="shipList" onKeyDown={handleKeyDown} tabIndex="0">
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
};

export default shipList;
