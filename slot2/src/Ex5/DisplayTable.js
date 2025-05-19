import { useState } from "react";
import React from "react";
import "./table.css";

function DisplayTable(props) {
    console.log(props);
    const iState =  [
        { id: 1, name: "King", age: 50,  occupation:"footballer" },
        { id: 2, name: "John", age: 20, occupation: "footballer" },
        { id: 3, name: "water", age: 10, occupation: "footballer" },
        { id: 4, name: "rice", age: 10, occupation: "footballer" }
    ];
    
    const [ state , setState] = React.useState(iState);  // xét state 

    return (
      <div>
          <h4>----------------------------------------------Exercise 5---------------------</h4>
          <table>
          <tr key={"header"}>
            {Object.keys(state[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>
          {state.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
          </table>
      </div>
    )
}

export default DisplayTable;