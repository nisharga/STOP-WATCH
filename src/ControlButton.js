import React from "react";

const ControlButton = (props) => {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      START
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        RESET
      </div>
    </div>
  );
  const Resume = (
    <div className="btn btn-one" onClick={props.handlePauseResume}>
      {props.isPaused ? "PAUSE" : "STOP"}
    </div>
  );
  return (
    <div className="Control-Buttons">
      <div className="btn">{StartButton}</div>
      <div className="btn">{ActiveButtons}</div>
      <div className="btn">{Resume}</div>
    </div>
  );
};

export default ControlButton;
