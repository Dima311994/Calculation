import React, { Component } from "react";
import History from "../history/History";
import Calculator from "../calculator/Calculator";

export default class ControlPanel extends Component {
  render() {
    return (
      <div className="cont-display-key-history">
        <Calculator />
        <History />
      </div>
    );
  }
}
