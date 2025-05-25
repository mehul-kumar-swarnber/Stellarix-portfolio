import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import gsap from "gsap";

const floatingObjects = [
  { type: "astronaut", src: "/assets/floaters/astronaut.png" },
  { type: "satellite", src: "/assets/floaters/satellite.png" },
  { type: "planet", src: "/assets/floaters/planet1.png" },
  { type: "planet", src: "/assets/floaters/planet2.png" },
  { type: "asteroid", src: "/assets/floaters/asteroid1.png" },
  { type: "asteroid", src: "/assets/floaters/asteroid2.png" },
  { type: "asteroid", src: "/assets/floaters/asteroid3.png" },
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const Landing = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  const floatRefs = useRef([]);
  const velocities = useRef([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (e.button === 0) setClicked(true);
    };
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["I am Mehul Kumar Swarnber.", "I am a Web Developer."],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => typedInstance.current?.destroy();
  }, []);

  useEffect(() => {
    floatRefs.current = floatRefs.current.slice(0, floatingObjects.length);

    floatRefs.current.forEach((el, i) => {
      const obj = floatingObjects[i];
      const size = getRandom(60, 120);
      const maxX = Math.max(0, window.innerWidth - size);
      const maxY = Math.max(0, window.innerHeight - size);
      const x = getRandom(0, maxX);
      const y = getRandom(0, maxY);

      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      let dx = getRandom(-0.5, 0.5);
      let dy = getRandom(-0.5, 0.5);
      let rot = 0;

      switch (obj.type) {
        case "astronaut":
          dx *= 0.3; dy *= 0.3; break;
        case "satellite":
          dx *= 0.2; dy *= 0.2; break;
        case "planet":
          dx = 0; dy = 0; break;
        case "asteroid":
          dx *= 1.5; dy *= 1.5; break;
      }

      velocities.current[i] = {
        dx, dy, size, rot, angle: 0, x, y
      };
    });

    const animate = () => {
      floatRefs.current.forEach((el, i) => {
        const v = velocities.current[i];
        v.x += v.dx;
        v.y += v.dy;

        if (v.x <= 0 || v.x + v.size >= window.innerWidth) v.dx *= -1;
        if (v.y <= 0 || v.y + v.size >= window.innerHeight) v.dy *= -1;

        el.style.left = `${v.x}px`;
        el.style.top = `${v.y}px`;

        if (v.rot) {
          v.angle += v.rot;
          el.style.transform = `rotate(${v.angle}deg)`;
        }
      });
    };

    gsap.ticker.add(animate);
    return () => gsap.ticker.remove(animate);
  }, []);

  return (
    <div
      className={`relative w-[100vw] h-[100vh] overflow-hidden flex items-center justify-center text-white text-2xl md:text-4xl font-poppins`}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { box-shadow: 0 0 12px 4px rgba(0,123,255,0.6); }
          50% { box-shadow: 0 0 0px 0px rgba(0,123,255,0.0); }
        }
        .blink-ring {
          animation: blink 1.2s ease-in-out infinite;
        }
      `}</style>

      <span style={{ zIndex: 9999999 }} ref={typedElement}></span>

      <button
        className={`
          absolute bottom-6 text-sm md:text-base px-4 py-2 rounded-full z-[9999999]
          bg-none text-white shadow-md transition duration-300 ease-in-out
          ${!clicked ? 'blink-ring' : ''}
          hidden lg:inline-block
        `}
      >
        🚀 Left Click: Hold to disable jet flame and explore in freefall
        🛫 Right Click: Hold to fly back to the top
      </button>

      {floatingObjects.map((obj, index) => (
        <img
          key={index}
          src={obj.src}
          alt={`floater-${index}`}
          className="absolute pointer-events-none"
          ref={(el) => (floatRefs.current[index] = el)}
          style={{
            opacity: obj.type === "satellite" ? 0.7 : obj.type === "asteroid" ? 1 : 0.85,
            zIndex: obj.type === "planet" ? 0 : obj.type === "astronaut" ? 11 : 2,
            transformOrigin: "center center"
          }}
        />
      ))}
    </div>
  );
};

export default Landing;
