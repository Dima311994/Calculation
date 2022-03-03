import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { options, defaultOption } from "../../constants/dropdown";
export default class SettingPage extends Component {
  render() {
    return (
      <div className="setting-cont">
        <p className="setting-cont_title">Settings</p>
        <div>
          <p className="title-theme">Switch Theme</p>
          <Dropdown
            className="dropdown-theme"
            arrowClassName="myArrowClassName"
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
          />
        </div>
        <div>
          <button className="btn-clear">Clear All History</button>
        </div>
      </div>
    );
  }
}
