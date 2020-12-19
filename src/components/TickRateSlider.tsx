import React from 'react';

interface TickRateSliderProps {
  minTickRate: number;
  maxTickRate: number;
  currentTickRate: number;
  // TODO: Fix type
  onChangeHandler: any;
}

const TickRateSlider: React.FC<TickRateSliderProps> = ({
  minTickRate,
  maxTickRate,
  currentTickRate,
  onChangeHandler,
}: TickRateSliderProps) => {
  return (
    <input
      type='range'
      min={minTickRate}
      max={maxTickRate}
      value={currentTickRate}
      onChange={onChangeHandler}
    />
  );
};

export default TickRateSlider;
