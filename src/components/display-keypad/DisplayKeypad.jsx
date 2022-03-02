import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

export default class DisplayKeypad extends Component {
  render() {
    return (
      <div className="display-keypad-cont">
        <Display />
        <Keypad />
      </div>
    );
  }
}
