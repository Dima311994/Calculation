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
    const result = eval(this.state.out);
    this.setState({
      res: result.toFixed(2),
      isZero: false,
    });
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
          operation: [...this.state.out, ...value] /* .join("") */,
        });
    }
    console.log(this.state.operation);
    console.log(this.state.arr);
  };
  componentDidMount() {
    this.setState({ operation: JSON.parse(localStorage.getItem(`operation`)) });
  }
  componentDidUpdate() {
    localStorage.setItem(
      `operation${localStorage.length}`,
      JSON.stringify(this.state.operation)
    );
  }
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
