import React, { Component } from "react";
import Header from "./components/header/Header";
import SettingPage from "./components/setting-page/SettingPage";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";
import { GlobalStyles } from "./styled-components/GlobalStyles";
import {
  lightTheme,
  darkTheme,
  coloredTheme,
} from "./styled-components/Themes";
import { ThemeProvider } from "styled-components";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  themeToggler = (e) => {
    this.setColor(e.target.value);
    this.setState({ theme: localStorage.getItem("Color") });

    localStorage.getItem("Color");
  };

  setColor = (color) => localStorage.setItem("Color", color);

  componentDidMount() {
    this.setState({ theme: localStorage.getItem("Color") });
  }
  render() {
    const theme = () => {
      if (this.state.theme === "light") {
        return lightTheme;
      } else if (this.state.theme === "dark") {
        return darkTheme;
      } else {
        return coloredTheme;
      }
    };

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route
              path="/setting"
              element={<SettingPage changeTheme={this.themeToggler} />}
            />
          </Routes>
        </ThemeProvider>
      </>
    );
  }
}
