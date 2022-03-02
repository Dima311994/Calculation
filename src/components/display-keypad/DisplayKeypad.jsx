import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

export default class DisplayKeypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "0",
    };
  }

  render() {
    return (
      <div className="display-keypad-cont">
        <Display defaultValue={this.state.out} />
        <Keypad />
      </div>
    );
  }
}
