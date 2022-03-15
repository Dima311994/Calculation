import React, { Component } from "react";
import Display from "../display/Display";
import Keypad from "../keypad/Keypad";
import History from "../history/History";
import {
  Calculator,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand,
  ExponentCommand,
} from "../../utils/command";
import { roundNum } from "../../utils/roundSliceNum";
export default class CalculatorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: "",
      operator: null,
    };
  }

  calculator = new Calculator();

  handleClick = (content) => {
    const { firstValue } = this.state;

    switch (content) {
      case "C": {
        this.setState(({ firstValue }) => ({
          firstValue: roundNum(firstValue),
        }));
        break;
      }
      case "CE": {
        this.calculator.reset();
        this.setState({ firstValue: "0" });
        break;
      }
      case "+": {
        this.setState({
          operator: "+",
          firstValue: "",
        });
        break;
      }
      case "-": {
        this.setState({
          operator: "-",
          firstValue: "",
        });
        break;
      }
      case "*": {
        this.setState({
          operator: "*",
          firstValue: "",
        });
        break;
      }
      case "/": {
        this.setState({
          operator: "/",
          firstValue: "",
        });
        break;
      }
      case "%": {
        this.setState({
          operator: "%",
          firstValue: "",
        });
        break;
      }
      case "^": {
        this.setState({
          operator: "**",
          firstValue: "",
        });
        break;
      }
      case "=": {
        const { operator, firstValue } = this.state;
        if (!this.state.operator) break;

        if (operator === "+") {
          this.calculator.execute(new AddCommand(firstValue));
        } else if (operator === "-") {
          this.calculator.execute(new SubtractCommand(firstValue));
        } else if (operator === "*") {
          this.calculator.execute(new MultiplyCommand(firstValue));
        } else if (operator === "/") {
          this.calculator.execute(new DivideCommand(firstValue));
        } else if (operator === "%") {
          this.calculator.execute(new RemainderCommand(firstValue));
        } else if (operator === "**") {
          this.calculator.execute(new ExponentCommand(firstValue));
        }

        this.setState({
          operator: null,
          firstValue: this.calculator.getValue(),
        });
        break;
      }

      case ".": {
        if (firstValue.toString().includes(".")) return;
        this.setState(({ firstValue }) => ({
          firstValue: `${firstValue}.`,
        }));

        break;
      }

      default: {
        if (!this.state.operator) {
          this.calculator.setCurrent(this.state.firstValue + content);
        }
        this.setState(({ firstValue }) => ({
          firstValue: parseFloat(firstValue + content).toString(),
        }));
      }
    }
  };

  render() {
    const { firstValue } = this.state;
    const memoryValue = this.calculator.getValue();
    return (
      <div className="cont-display-key-history">
        <div className="display-keypad-cont">
          <Display value={firstValue} memory={memoryValue} />
          <Keypad value={firstValue} handleClick={this.handleClick} />
        </div>
        <History value={firstValue} memory={memoryValue} />
      </div>
    );
  }
}
