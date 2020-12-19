import React, { useEffect, useState } from 'react';

const useWindow = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const windowResizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResizeHandler);
    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  });
  return windowWidth;
};

export default useWindow;
