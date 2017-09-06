import React from 'react';
import Camper from "./Camper";
import API from "./../API";

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: null
    }
  }
  
  componentDidMount() {
    {/* Fetch initial campers */}
    this.getTopRecent();
  }

  getTopRecent() {
    API.fetchTop100For30Days().then(function(campers) {
      if(campers === null) {
        console.log("No data found");
      } else {
        this.setState({
          campers: campers
        });
      }
    }.bind(this));
  }

  getTopAllTime() {
    API.fetchTop100ForAllTime().then(function(campers) {
      if(campers === null) {
        console.log("No data found");
      } else {
        this.setState({
          campers: campers
        });
      }
    }.bind(this));
  }

  render() {
    const campers = this.state.campers;
    return (
      <table className="camper-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th className="selectable" onClick={this.getTopRecent.bind(this)}>Points in past 30 Days</th>
          <th className="selectable" onClick={this.getTopAllTime.bind(this)}>All Time Points</th>
        </tr>
      </thead>
      <tbody>
      { /*Create a table row with info for each player */}
      {this.state.campers === null ? console.log("no campers yet") :
      campers.map(function(camper, index) {
        return (
          <Camper key={index} camper={camper} number={index + 1}/>
        )
      })}
      </tbody>
    </table>
    )
  }
};

export default Results;
