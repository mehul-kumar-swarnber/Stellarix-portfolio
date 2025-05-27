import { useEffect, useRef } from 'react';

const CursorScrollWatcher = () => {
  const scrollDirection = useRef(null);
  const animationFrame = useRef(null);
  const speedRef = useRef(0);
  const acceleration = 0.05;
  const maxSpeed = 4.5;

  useEffect(() => {
    const scrollStep = () => {
      if (scrollDirection.current) {
        const scrollAmount = speedRef.current * (scrollDirection.current === 'down' ? 1 : -1);
        window.scrollBy({ top: scrollAmount });

        if (speedRef.current < maxSpeed) {
          speedRef.current += acceleration;
        }

        animationFrame.current = requestAnimationFrame(scrollStep);
      }
    };

    const handleMouseDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase?.() || '';
      const isInteractive = ['input', 'textarea', 'select', 'button', 'a'].includes(tag);

      if (!isInteractive && (e.button === 0 || e.button === 2)) {

        scrollDirection.current = e.button === 0 ? 'down' : 'up';

        e.preventDefault();
        document.body.classList.add('cursor-astronaut');
        document.body.style.userSelect = 'none';
        scrollStep();
      }
    };
   
    const handleMouseUp = () => {
      scrollDirection.current = null;
      speedRef.current = 0;
      cancelAnimationFrame(animationFrame.current);
      document.body.classList.remove('cursor-astronaut');
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousedown', handleMouseDown, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame.current);
      document.body.style.userSelect = '';
    };
  }, []);

  useEffect(() => {
    const suppressContextMenu = (e) => e.preventDefault();
    window.addEventListener('contextmenu', suppressContextMenu);
    return () => window.removeEventListener('contextmenu', suppressContextMenu);
  }, []);

  return null;
};

export default CursorScrollWatcher;
