import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RevealOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    gsap.to(el, {
      duration: 2,
      scaleY: 0,
      transformOrigin: "top center",
      ease: "power4.inOut",
      onComplete: () => {
        el.style.display = "none"; 
      },
    });
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
        backgroundColor: "#0d0d0d", 
        zIndex: 999999999999,
        transform: "scaleY(1)",
      }}
    />
  );
};

export default RevealOverlay;
