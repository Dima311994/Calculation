import React, { Component } from "react";

export default class History extends Component {
	
  render() {
    return (
      <div className="history-cont">
        <p className="history-title">History</p>
        <div className="history-operation">{this.props.history}</div>
      </div>
    );
  }
}
