import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super(props);
	
  }

  render() {
    return (
      <div className="display-cont">
        <input
          className="output-result"
          defaultValue={this.props.defaultValue}
        />
      </div>
    );
  }
}
