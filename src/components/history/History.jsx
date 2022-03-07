import React, { Component } from "react";

export default class History extends Component {
  render() {
    const b = JSON.parse(localStorage.getItem(`operation`));
    console.log(b);
    return (
      <div className="history-cont">
        <p className="history-title">History</p>
        <div className="history-operation">
          {localStorage.length > 0
            ? b.map((i, index) => {
                console.log(i);
                return <div key={index}>{i.join("")}</div>;
              })
            : "History empty"}
        </div>
      </div>
    );
  }
}
