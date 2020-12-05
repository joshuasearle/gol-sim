import React, { useState } from 'react';

interface RandomiseButtonProps {
  // TODO: Fix type
  randomiseHandler: any;
}

const StartStopButton: React.FC<RandomiseButtonProps> = ({
  randomiseHandler,
}) => {
  return <button onClick={randomiseHandler}>Randomise Board</button>;
};

export default StartStopButton;
