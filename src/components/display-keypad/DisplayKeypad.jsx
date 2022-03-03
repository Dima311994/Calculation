import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

export default class DisplayKeypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "",
    };
  }
  calculate = () => {
    const result = eval(this.state.out);
    this.setState({
      out: result,
    });
  };

  handleClick = (e) => {
    const output = this.state.out;
    const value = e.target.value;
    switch (value) {
      case "CE":
        this.setState({ out: "" });
        break;
      case "=":
        this.calculate();
        break;
      case "C":
        this.setState({
          out: output.substring(0, output.length - 1),
        });
        break;
      default:
        this.setState({ out: output + value });
    }
  };

  render() {
    return (
      <div className="display-keypad-cont">
        <Display defaultValue={this.state.out} />
        <Keypad mathHandle={this.handleClick} />
      </div>
    );
  }
}
