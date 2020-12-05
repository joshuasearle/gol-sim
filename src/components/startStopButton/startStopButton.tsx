import React, { useState } from 'react';

interface StartStopButton {
  running: boolean;
  // TODO: Fix type
  clickHandler: any;
}

const StartStopButton: React.FC<StartStopButton> = ({
  running,
  clickHandler,
}) => {
  return <button onClick={clickHandler}>{running ? 'Stop' : 'Start'}</button>;
};

export default StartStopButton;
