import { useEffect, useState } from 'react';

// Returns if the mouse went down in the body section of the page
const useMouseDownBody = () => {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const mouseDownHandler = (e: MouseEvent) => {
      const header = document.querySelector('.header');
      const rect = header.getBoundingClientRect();
      const mouseInHeader = rect.bottom >= e.clientY;
      if (!mouseInHeader) e.preventDefault();
      console.log('down');
      setMouseDown(true);
    };
    const mouseUpHandler = (e: MouseEvent) => {
      console.log('up');

      setMouseDown(false);
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    return () => {
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  });

  return mouseDown;
};

export default useMouseDownBody;
