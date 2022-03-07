import React, { Component } from "react";

export default class History extends Component {
  render() {
    let arr = [];

    if (localStorage.length > 0) {
      let keys = Object.keys(localStorage);
      for (let key of keys) {
		console.log('key - ',key)
        arr.push(`${localStorage.getItem(key)}`.replace(/[^+/*-\d]/g, ""));
      }

    }
    console.log(arr);
    return (
      <div className="history-cont">
        <p className="history-title">History</p>
        <div className="history-operation">
          {localStorage.length > 0
            ? arr.map((i, index) => {
                return <div key={index}>{i}</div>;
              })
            : "History empty"}
        </div>
      </div>
    );
  }
}
