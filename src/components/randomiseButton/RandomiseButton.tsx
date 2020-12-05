import React, { useState } from 'react';

interface RandomiseButtonProps {
  // TODO: Fix type
  randomiseHandler: any;
  running: boolean;
}

const StartStopButton: React.FC<RandomiseButtonProps> = ({
  randomiseHandler,
  running,
}) => {
  return (
    // Button disabled when simulation is running
    <button onClick={randomiseHandler} disabled={running}>
      Randomise Board
    </button>
  );
};

export default StartStopButton;
