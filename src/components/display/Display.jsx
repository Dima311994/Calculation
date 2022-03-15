import React, { Component } from "react";

export default class Display extends Component {
  render() {
    return (
      <div className="display-cont">
        <div className="output-result">
          {this.props.value || this.props.memory}
        </div>
      </div>
    );
  }
}
