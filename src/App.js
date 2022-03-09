import React, { Component } from "react";
import Header from "./components/header/Header";
import SettingPage from "./components/setting-page/SettingPage";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";

export default class App extends Component {
  setColor = (color) => localStorage.setItem("Color", color);
  getColor = () => localStorage.getItem("Color");

  handleColor = (e) => {
    this.setColor(e.target.value);

    document.body.style.backgroundColor = this.getColor();
    if (localStorage.getItem("Color") === "black") {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }
  };

  render() {
    document.body.style.backgroundColor = this.getColor();
    if (localStorage.getItem("Color") === "black") {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
    }
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route
            path="/setting"
            element={<SettingPage changeTheme={this.handleColor} />}
          />
        </Routes>
      </>
    );
  }
}
