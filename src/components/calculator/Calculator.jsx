import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      out: "",
      isZero: true,
    };
  }
  calculate = () => {
    const result = eval(this.state.out);
    this.setState({
      out: result.toFixed(2),
      isZero: false,
    });
  };

  handleClick = (e) => {
    const output = this.state.out;
    const value = e.target.value;
    switch (value) {
      case "CE":
        this.setState({ out: "", isZero: true });
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
        this.setState({ out: output + value, isZero: false });
    }
  };

  render() {
    return (
      <div className="display-keypad-cont">
        <Display defaultValue={this.state.out} isZero={this.state.isZero} />
        <Keypad mathHandle={this.handleClick} />
      </div>
    );
  }
}
