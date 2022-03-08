import React, { Component } from "react";

export default class History extends Component {
  render() {
	   
    const historyElem = JSON.parse(localStorage.getItem(`operation`));
    return (
      <div className="history-cont">
        <p className="history-title">History</p>
        <div className="history-operation">
          {historyElem ? historyElem.map((i, index) => {
            console.log(i);
            return <div key={index}>{i.join("")}</div>;
          }) : 'History Clear'}
        </div>
      </div>
    );
  }
}
