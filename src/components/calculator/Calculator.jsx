import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";
import History from "../history/History";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res: "",
      out: "",
      isZero: true,
      operation: [],
    };
  }
  calculate = () => {
    let a = JSON.parse(localStorage.getItem("operation"));
    console.log(a);
    const result = eval(this.state.out);
    this.setState({
      res: result.toFixed(2),
      isZero: false,
    });
    if (a) {
      localStorage.setItem(
        `operation`,
        JSON.stringify([...a, [...this.state.operation]])
      );
    } else {
      localStorage.setItem(
        `operation`,
        JSON.stringify([[...this.state.operation]])
      );
    }
  };

  handleClick = (e) => {
    const output = this.state.res;
    const value = e.target.value;
    switch (value) {
      case "CE":
        this.setState({ res: "", isZero: true });
        break;
      case "=":
        this.calculate();
        break;
      case "C":
        this.setState({
          res: output.substring(0, output.length - 1),
        });
        break;
      default:
        this.setState({
          res: output + value,
          out: output + value,
          isZero: false,
          operation: [...this.state.out, ...value],
        });
    }
  };
 
  render() {
    return (
      <div className="cont-display-key-history">
        <div className="display-keypad-cont">
          <Display defaultValue={this.state.res} isZero={this.state.isZero} />
          <Keypad mathHandle={this.handleClick} />
        </div>
        <History history={this.state.operation} />
      </div>
    );
  }
}
