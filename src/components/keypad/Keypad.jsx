import React, { Component } from "react";
import { Button } from "./button/Button";
import { numberOperand } from "../../constants/numberOperand";
export default class Keypad extends Component {
  render() {
    return (
      <div className="keypad-cont">
        {numberOperand.map(({ id, context, type }) => {
          return (
            <Button
              key={id}
              value={context}
              type={type}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}
