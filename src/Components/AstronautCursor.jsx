import { useEffect, useState, useRef } from "react";

export default function AstronautCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mouseHeldLong, setMouseHeldLong] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = (e) => {
      if (e.button === 0) {
        timeoutRef.current = setTimeout(() => {
          setMouseHeldLong(true);
        }, 150);
      }
      if (e.button === 2) setRightClick(true);
    };

    const onMouseUp = (e) => {
      if (e.button === 0) {
        clearTimeout(timeoutRef.current);
        setMouseHeldLong(false);
      }
      if (e.button === 2) setRightClick(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  
  useEffect(() => {
    const suppressContextMenu = (e) => e.preventDefault();
    window.addEventListener("contextmenu", suppressContextMenu);
    return () => window.removeEventListener("contextmenu", suppressContextMenu);
  }, []);

  return (
    <>
      <style>{`
        body, button, a {
          cursor: none !important;
        }
        input, textarea, select {
          cursor: text !important;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .flame {
          position: absolute;
          pointer-events: none;
          user-select: none;
          animation: flicker 1s infinite;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 99999999,
          userSelect: "none",
          width: 50,
          height: 60,
        }}
      >
        {mouseHeldLong ? (
          <img
            src="/assets/cursorDeSite/cursorDefalling.webp"
            alt="Falling Astronaut"
            style={{
              width: "40px",
              height: "40px",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              filter: "drop-shadow(0 0 6px orangered)",
              userSelect: "none",
            }}
            draggable={false}
          />
        ) : (
          <>
            <img
              src="/assets/cursorDeSite/cursorDeAstronaute.webp"
              alt="Astronaut Cursor"
              style={{
                width: "40px",
                height: "40px",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                filter: "drop-shadow(0 0 6px orangered)",
                userSelect: "none",
              }}
              draggable={false}
            />
            <img
              src="/assets/FlameDeRocketo/flameDeSmall/fire-png-696.webp"
              alt="Rocket Flame"
              className="flame"
              style={{
                width: rightClick ? "40px" : "20px",
                height: rightClick ? "40px" : "20px",
                bottom: rightClick ? "-20px" : "0px",
                left: rightClick ? "12%" : "32%",
                transform: "translateX(-50%)",
                filter: "drop-shadow(0 0 4px orange)",
              }}
              draggable={false}
            />
          </>
        )}
      </div>
    </>
  );
}
