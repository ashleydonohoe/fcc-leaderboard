import React from "react";

const Camper = (props) => {
  console.log(props.camper);
  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td className="name"><img src={props.camper.img} alt="camper avatar"/> {props.camper.username}</td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  )
}

export default Camper;
