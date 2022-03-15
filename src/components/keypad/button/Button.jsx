import React from "react";

export const Button = ({ value, handleClick, type }) => {
  const onButtonClick = (value) => () => {
    handleClick(value);
  };

  return (
    <div className="btn-cont-keypad">
      <button
        className="btn-keypad"
        onClick={onButtonClick(value)}
        value={value}
        key={value}
        type={type}
      >
        {value}
      </button>
    </div>
  );
};
