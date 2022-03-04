import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { GlobalStyles } from "../../styled-component/globalStyles";
import { lightTheme, darkTheme } from "../../styled-component/Themes";
import { ThemeProvider } from "styled-components";
import { options, defaultOption } from "../../constants/dropdown";

export default class SettingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "Light Theme",
    };
  }

  handleMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    this.setState({theme: mode });
  };

  componentDidMUpdate() {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && this.setState({theme:localTheme});
  }

  handleToggle = () => {
    if (this.state.theme === "Light Theme") {
      this.setState({ theme: "Dark Theme" });
    }
    if (this.state.theme === "Dark Theme") {
      this.setState({ theme: "Light Theme" });
    }
  };
 
  render() {
	const themeMode = this.state.theme === 'Light Theme' ? lightTheme : darkTheme;
    return (
		<ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <div className="setting-cont">
          <p className="setting-cont_title">Settings</p>
          <div>
            <p className="title-theme">Switch Theme</p>
            <Dropdown
              onChange={this.handleToggle}
              className="dropdown-theme"
              arrowClassName="myArrowClassName"
              options={options}
              value={defaultOption}
            />
          </div>
          <div>
            <button className="btn-clear">Clear All History</button>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
