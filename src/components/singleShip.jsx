import React from "react";
import "./singleShip.css";

const placeHolder =
  "https://via.placeholder.com/400x300.png/888888/000000/?text=No+Image+Available";

const singleShip = props => (
  <div className="singleShip">
    <div>
      <img
        src={props.singleShip.image ? props.singleShip.image : placeHolder}
        alt={props.singleShip.ship_name}
      />
    </div>

    <div className="shipTitle">
      <h1>{props.singleShip.ship_name}</h1>
      <h2>{props.singleShip.ship_type}</h2>
      {props.singleShip.url ? <a href={props.singleShip.url}>LINK</a> : ""}
    </div>

    <div className="mainShipData">
      <ul>
        <li>
          <label>Model:</label>
          {props.singleShip.ship_model}
        </li>
        <li>
          <label>Roles:</label>
          {props.singleShip.roles.join(", ")}
        </li>
        <li>
          <label>Status:</label>{" "}
          {props.singleShip.active ? "ACTIVE" : "INACTIVE"}
        </li>
        <li>
          <label>IMO: </label>
          {props.singleShip.imo}
        </li>
        <li>
          <label>MMSI:</label>
          {props.singleShip.mmsi}
        </li>
        <li>
          <label>ABS:</label>
          {props.singleShip.abs}
        </li>
        <li>
          <label>Class:</label>
          {props.singleShip.class}
        </li>
        <li>
          <label>Weight in lbs:</label> {props.singleShip.weight_lbs}
        </li>
        <li>
          <label>Weight in kgs:</label>
          {props.singleShip.weight_kg}
        </li>
        <li>
          <label>Year built:</label>
          {props.singleShip.year_built}
        </li>
        <li>
          <label>Home Port:</label>
          {props.singleShip.home_port}
        </li>
      </ul>
      <ul>
        <li>
          <label>Current status:</label>
          {props.singleShip.status}
        </li>
        <li>
          <label>Speed:</label>
          {props.singleShip.speed_kn}
        </li>
        <li>
          <label>Course:</label>
          {props.singleShip.course_deg}
        </li>
        <li>
          <label>Latitude/Longtitude:</label>
          {props.singleShip.position.latitude} /{" "}
          {props.singleShip.position.longitude}
        </li>
      </ul>
      <ul>
        <li>
          <label>Successful landings:</label>{" "}
          {props.singleShip.successful_landings}
        </li>
        <li>
          <label>Attempted landings:</label>{" "}
          {props.singleShip.attempted_landings}
        </li>
      </ul>
    </div>

    <div className="shipMissions">
      <h2>Missions</h2>
      <ul>
        {props.singleShip.missions.slice(0, 15).map(mission => (
          <li key={mission.name}>
            <label>Name:</label> {mission.name} | <label>Flight:</label>{" "}
            {mission.flight}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default singleShip;

/*
ship_id: "AMERICANLOSER",
  ship_name: "American Loser",
  ship_model: null,
  ship_type: "Tug",
  roles: ["Buffer Ship", "Frigate Tug"],
  active: false,
  imo: 7434016666,
  mmsi: 367020820666,
  abs: 571252666,
  class: 7604342666,
  weight_lbs: 588000666,
  weight_kg: 266712666,
  year_built: 197666,
  home_port: "Port of Los Deviles",
  status: "Stopped",
  speed_kn: 0,
  course_deg: null,
  position: {
    latitude: 30.52731,
    longitude: -88.10171
  },
  successful_landings: null,
  attempted_landings: null,
  missions: [
    {
      name: "COTS 1",
      flight: 7
    },
    {
      name: "COTS 2",
      flight: 8
    }
  ],
  url:
    "https://www.marinetraffic.com/en/ais/details/ships/shipid:434663/vessel:AMERICAN%20CHAMPION",
  image: "https://i.imgur.com/woCxpkj.jpg"
};
*/
