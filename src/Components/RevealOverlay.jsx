import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RevealOverlay = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.2 },
    });

    // Animate both panels upward & downward
    tl.to(topRef.current, {
      yPercent: -100,
      delay: 0.5,
    })
      .to(
        bottomRef.current,
        {
          yPercent: 100,
        },
        "<" // run at same time as top panel
      )
      .add(() => {
        if (topRef.current) topRef.current.style.display = "none";
        if (bottomRef.current) bottomRef.current.style.display = "none";
      });
  }, []);

  return (
    <>
      {/* Top Panel */}
      <div
        ref={topRef}
        className="fixed top-0 left-0 w-full h-1/2"
        style={{
          background: "radial-gradient(circle at center, #0a0f1f, #000 80%)",
          boxShadow: "0 0 40px rgba(0,150,255,0.4)",
          zIndex: 999999999, // keep ABOVE everything
        }}
      />

      {/* Bottom Panel */}
      <div
        ref={bottomRef}
        className="fixed bottom-0 left-0 w-full h-1/2"
        style={{
          background: "radial-gradient(circle at center, #0a0f1f, #000 80%)",
          boxShadow: "0 0 40px rgba(0,150,255,0.4)",
          zIndex: 999999999, // same high z-index
        }}
      />
    </>
  );
};

export default RevealOverlay;
