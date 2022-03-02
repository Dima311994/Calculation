import React, { PureComponent } from "react";

export default class Header extends PureComponent {
  render() {
    return (
      <nav className="header-cont">
        <div className="header-cont__title title">
          <h1>Calculation App</h1>
        </div>
        <div className="header-cont__rout rout rout_font-size-big">
          <div>Home</div>
          <div>Setting</div>
        </div>
      </nav>
    );
  }
}
