import React, { Component } from "react";

export default class Display extends Component {


  render() {
    return (
      <div className="display-cont">
        <div className="output-result">
        {!this.props.isZero ? this.props.defaultValue : '0'}
      </div>
	  </div>
    );
  }
}
