import React, { PureComponent } from "react";
import numberOperand from "../../constants/numberOperand";
export default class Keypad extends PureComponent {
  constructor(props) {
    super(props);
  }

  

 
  render() {
    return (
      <div className="keypad-cont">
        {numberOperand.map((i, index) => {
          return (
            <div key={index} className="btn-cont-keypad">
              <button className="btn-keypad" onClick={this.props.handleClick(i)}>
                {i}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
