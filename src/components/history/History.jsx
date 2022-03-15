import React, { Component } from "react";
import { sliceNum } from "../../utils/roundSliceNum";
export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: JSON.parse(localStorage.getItem("history")) || [],
      reloadHistory: null,
    };
  }

  componentDidMount() {
    let reload = setInterval(this.changeState, 0);
    this.setState({ reloadHistory: reload });
  }

  componentWillUnmount() {
    clearInterval(this.state.reloadHistory);
  }

  changeState = () => {
    this.setState({
      history: JSON.parse(localStorage.getItem("history")),
    });
  };

  getHistory = (history) => {
    let res = [];
    if (history) {
      res = history.map(({ firstValue, operator, memory }, i) => {
        return (
          <div className="history-operation" key={i}>
            {`${sliceNum(firstValue)} 
              ${operator}
              ${sliceNum(memory)}`}
          </div>
        );
      });
    }
    return res;
  };
  render() {
    const historyOperand = this.getHistory(this.state.history);
    return (
      <div className="history-cont">
        <p className="history-title">History</p>
        {historyOperand}
      </div>
    );
  }
}
