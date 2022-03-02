import React, { Component } from "react";
import numberOperand from "../../constants/numberOperand";
export default class Keypad extends Component {
  render() {
    return (
      <div className="keypad-cont">
        {/* <button className="btn-keypad">C</button>
		  <button className="btn-keypad">7</button>
		  <button className="btn-keypad">8</button>
		  <button className="btn-keypad">9</button>
		  <button className="btn-keypad">*</button> */}
        {numberOperand.map((i) => {
          return (
            <div className="btn-cont-keypad">
              <button className="btn-keypad">{i}</button>
            </div>
          );
        })}
      </div>
    );
  }
}
