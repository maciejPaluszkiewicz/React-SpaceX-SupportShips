import React, { Component } from "react";
import "./App.css";
import SpaceHeader from "./components/spaceHeader";
import ShipList from "./components/shipList";
import SingleShip from "./components/singleShip";

const singleShip1 = {
  ship_id: "AMERICANCHAMPION",
  ship_name: "American Champion",
  ship_model: null,
  ship_type: "Tug",
  roles: ["Support Ship", "Barge Tug"],
  active: false,
  imo: 7434016,
  mmsi: 367020820,
  abs: 571252,
  class: 7604342,
  weight_lbs: 588000,
  weight_kg: 266712,
  year_built: 1976,
  home_port: "Port of Los Angeles",
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
const singleShip2 = {
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

class App extends Component {
  state = {
    ships: [
      { name: "Visage", type: "Imperial Star Destroyer", ship_id: null },
      {
        name: "Millenium Falcon",
        type: "Corellian Freighter YT-1300",
        ship_id: null
      },
      { name: "Executor", type: "Imperial Dreadnough", ship_id: null },
      { name: "Viscount", type: "Viscount-class Dreadnough", ship_id: null },
      {
        name: "AmCham",
        type: "Imperial Dreadnough",
        ship_id: "AMERICANCHAMPION"
      },
      {
        name: "AmLoser",
        type: "Viscount-class Dreadnough",
        ship_id: "AMERICANLOSER"
      }
    ],
    showShips: true,
    singleShip: null
  };

  // if (this.state.showShips) {

  //   ships = (
  //     <div>
  //       {this.state.ships.map(singleShip = () => {
  //         return <SingleShip
  //           name={sinlgeShip.name}
  //           type={singleShip.type}/>
  //       })}
  //     </div>
  //   );
  // }

  handleShipDetailsDisplay = ship_id => {
    if (ship_id === "AMERICANCHAMPION") {
      this.setState({ singleShip: singleShip1 });
    }
    if (ship_id === "AMERICANLOSER") {
      this.setState({ singleShip: singleShip2 });
    }
  };

  render() {
    return (
      <div className="App">
        <SpaceHeader />
        <div className="shipInfo">
          <ShipList
            shipList={this.state.ships}
            onShipClick={this.handleShipDetailsDisplay}
          />
          {this.state.singleShip ? (
            <SingleShip singleShip={this.state.singleShip} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
