import { useEffect } from "react";

const DisableWheelScroll = () => {
  useEffect(() => {
    const preventWheel = (e) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventWheel);
    };
  }, []);

  return null;
};

export default DisableWheelScroll;
