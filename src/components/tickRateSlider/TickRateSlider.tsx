import React from 'react';

interface TickRateSliderProps {
  minTickRate: number;
  maxTickRate: number;
  currentTickRate: number;
  // TODO: Fix type
  onChangeHandler: any;
  running: boolean;
}

const TickRateSlider: React.FC<TickRateSliderProps> = ({
  minTickRate,
  maxTickRate,
  currentTickRate,
  onChangeHandler,
  running,
}: TickRateSliderProps) => {
  return (
    <input
      type='range'
      min={minTickRate}
      max={maxTickRate}
      value={currentTickRate}
      onChange={onChangeHandler}
      // If simulation is running, cannot change the tick rate
      disabled={running}
    />
  );
};

export default TickRateSlider;
