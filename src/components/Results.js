import React from 'react';
import Camper from "./Camper";
import API from "./../API";

class Results extends React.Component {
  componentDidMount() {
    API.fetchTop100For30Days().then(function(campers) {
      if(campers === null) {
        console.log("No data found");
      } else {
        console.log(campers);
        this.setState({
          topRecent: campers
        });
      }
    }.bind(this));
  }

  render() {
    return (
      <table className="camper-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th>Points in past 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
      { /*Create a table row with info for each player */}
      <Camper/>
      </tbody>
    </table>
    )
  }
};

export default Results;
