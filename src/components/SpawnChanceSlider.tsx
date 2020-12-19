import React from 'react';

interface SpawnChanceSliderProps {
  currentSpawnChance: number;
  // TODO: Fix type
  onChangeHandler: any;
}

const SpawnChanceSlider: React.FC<SpawnChanceSliderProps> = ({
  currentSpawnChance,
  onChangeHandler,
}) => {
  return (
    <input
      type='range'
      min={0}
      max={100}
      value={currentSpawnChance}
      onChange={onChangeHandler}
    />
  );
};

export default SpawnChanceSlider;
