import { useState } from 'react';

const useToggle = (initial: boolean): [boolean, () => void] => {
  const [bool, setBool] = useState(initial);
  const toggleBool = () => {
    setBool(!bool);
  };
  return [bool, toggleBool];
};

export default useToggle;
