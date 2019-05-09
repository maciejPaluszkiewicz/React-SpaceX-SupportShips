import React, { Component } from "react";
import "./App.css";
import SpaceHeader from "./components/spaceHeader";
import ShipList from "./components/shipList";
import SingleShip from "./components/singleShip";

const apiData = "https://api.spacexdata.com/v3/ships/";

class App extends Component {
  state = {
    ships: null,
    showShips: true,
    singleShip: null
  };

  handleShipDetailsDisplay = ship_id => {
    fetch(`${apiData}${ship_id}`)
      .then(results => results.json())
      .then(data =>
        this.setState({
          singleShip: data
        })
      );
  };

  componentDidMount() {
    fetch(`${apiData}`)
      .then(results => results.json())
      .then(data =>
        this.setState({
          ships: data
        })
      );
  }

  render() {
    return (
      <div className="App">
        <SpaceHeader />
        <div className="shipInfo">
          {this.state.ships ? (
            <ShipList
              shipList={this.state.ships}
              onShipClick={this.handleShipDetailsDisplay}
            />
          ) : (
            ""
          )}
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
