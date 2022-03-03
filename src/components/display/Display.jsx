import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="display-cont">
        <div className="output-result">
        {this.props.defaultValue}
      </div>
	  </div>
    );
  }
}
