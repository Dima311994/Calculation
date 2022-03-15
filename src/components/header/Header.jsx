import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    return (
      <nav className="header-cont">
        <div className="header-cont__title title">
          <h1>Calculation App</h1>
        </div>
        <div className="header-cont__rout rout rout_font-size-big">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="setting">
            <div>Setting</div>
          </Link>
        </div>
      </nav>
    );
  }
}
