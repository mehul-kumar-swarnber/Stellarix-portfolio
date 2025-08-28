import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth <= 768;
const skills = [
  { name: "HTML", img: "/assets/planets/planet1.webp", top:isMobile?"10%":"5%", left:isMobile?"5%":"2%", className: "rotate-340"},

  { name: "Skills", img: "/assets/planets/planet9.webp", top:isMobile?"2%": "32%", left:isMobile?"45%": "32%", className: "rotate-340" },

  { name: "JavaScript", img: "/assets/planets/planet3.webp", top:isMobile?"35%": "25%", left:isMobile?"30%": "15%", className: "rotate-290" },

  { name: "C", img: "/assets/planets/planet1.webp", top:isMobile?"28%": "40%", left:isMobile?"5%": "6%", className: "rotate-15" },

  { name: "CSS", img: "/assets/planets/planet2.webp", top:isMobile?"50%": "35%", left:isMobile?"40%": "52%", className: "rotate-15" },

  { name: "Node.js", img: "/assets/planets/planet3.webp", top:isMobile?"42%": "8%", left:isMobile?"65%": "40%" },

  { name: "MongoDB", img: "/assets/planets/planet4.webp", top:isMobile?"60%": "55%", left:isMobile?"60%": "19%" },

  { name: "Java", img: "/assets/planets/planet5.webp", top:isMobile?"60%": "55%", left:isMobile?"5%": "38%" },

  { name: "React.js", img: "/assets/planets/planet6.webp", top:isMobile?"45%": "60%", left:isMobile?"7%": "59%" },

  { name: "Next.js", img: "/assets/planets/planet7.webp", top:isMobile?"23%": "30%", left:isMobile?"65%": "68%" },

  { name: "Python", img: "/assets/planets/planet2.webp", top:isMobile?"13%": "13%", left:isMobile?"35%": "83%" },

  { name: "MySQL", img: "/assets/planets/planet3.webp", top:isMobile?"8%": "55%", left:isMobile?"65%": "82%", className: "rotate-310" },
];


export default function Skills() {
  const sectionRef = useRef(null);
  const planetRefs = useRef([]);

  useEffect(() => {
    planetRefs.current.forEach((planet, i) => {
      const delay = i * 0.1;

      gsap.fromTo(
        planet,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
          duration: 1,
          delay,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.to(planet, {
        y: "+=12",
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random(),
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] md:h-[120vh] w-full overflow-hidden"
    >
      <ul className="relative w-full h-full">
        {skills.map((skill, i) => (
          <li
            key={i}
            ref={(el) => (planetRefs.current[i] = el)}
            className="absolute"
            style={{
              top: skill.top,
              left: skill.left,
            }}
          >
            <div className="relative" style={{ width: isMobile ? "100px" : `${skill.size || 200}px`, height: isMobile ? "100px" : `${skill.size || 200}px` }}>
              <img
                src={skill.img}
                alt={skill.name}
                loading="lazy"
                className={`w-full h-full object-contain glowPlanet ${skill.className || ""} ${skill.name === "Skills" ? "glowNebula" : ""}`}
              />

              <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold pointer-events-none text-shadow">
                {skill.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
