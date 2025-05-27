import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RevealOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;

    gsap.fromTo(
      el,
      { scaleY: 1 },
      {
        scaleY: 0,
        duration: 1.6,
        delay: 0.5, 
        ease: "power4.inOut",
        transformOrigin: "top center",
        onComplete: () => {
          if (el) el.style.display = "none";
        },
      }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black", 
        zIndex: 999999999,
        transform: "scaleY(1)",
        willChange: "transform",
        pointerEvents: "none",
      }}
    />
  );
};

export default RevealOverlay;
