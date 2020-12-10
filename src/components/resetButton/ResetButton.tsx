import React, { useState } from 'react';

interface ResetButtonProps {
  // TODO: Fix type
  resetHandler: any;
  running: boolean;
}

const ResetButton: React.FC<ResetButtonProps> = ({ resetHandler, running }) => {
  return (
    // Button disabled when simulation is running
    <button onClick={resetHandler} disabled={running}>
      Reset Board
    </button>
  );
};

export default ResetButton;
