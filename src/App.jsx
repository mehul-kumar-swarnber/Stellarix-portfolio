import { useEffect, useState, useRef, Suspense, lazy } from "react";
import Navbar from "./Components/Navbar";
import CursorScrollWatcher from "./Components/CursorScrollWatcher";
import AstronautCursor from "./Components/AstronautCursor";
import RevealOverlay from "./Components/RevealOverlay";
import Landing from "./Components/Landing";
import DisableWheelScroll from "./Components/DisableWheelScroll";
import { AnimatePresence, motion } from "framer-motion";

const About = lazy(() => import("./Components/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Experience = lazy(() => import("./Components/Experience")); // 🚀 New Experience Section
const PortfolioContactForm = lazy(() =>
  import("./Components/PortfolioContactForm")
);

function Loader() {
  const messages = [
    "Initializing Systems",
    "Calibrating Thrusters",
    "Launching Mission",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Rocket Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-6xl mb-6"
      >
        🚀
      </motion.div>

      {/* Loading Message */}
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-xl tracking-widest text-blue-300"
      >
        {messages[index]}...
      </motion.p>

      {/* Progress Bar */}
      <motion.div className="mt-8 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full bg-blue-400"
        />
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate = 2;

      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener("ended", handleEnded);

      video.oncanplaythrough = () => {
        setLoading(false);
      };

      return () => {
        video.removeEventListener("ended", handleEnded);
        video.oncanplaythrough = null;
      };
    }
  }, []);

  return (
    <>
      {/* Background Video */}
      <video
        ref={videoRef}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="/assets/backgroundVideo/backgrounDeSpaceVideo2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="bg-overlay fixed inset-0 -z-5"></div>

      {/* Loader */}
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <>
          <DisableWheelScroll />
          <CursorScrollWatcher />
          <RevealOverlay />
          <AstronautCursor />
          <Navbar />

          {/* Lazy-loaded sections */}
          <Suspense
            fallback={
              <div className="text-white p-8 text-center">
                Loading section...
              </div>
            }
          >
            <main>
              <section id="landing" className="min-h-screen">
                <Landing />
              </section>
              <section id="about" className="min-h-screen">
                <About />
              </section>
              <section id="skills" className="min-h-screen">
                <Skills />
              </section>
              <section id="projects" className="min-h-screen">
                <Projects />
              </section>
              <section id="experience" className="min-h-screen">
                <Experience />
              </section>
              <section id="contact" className="min-h-screen">
                <PortfolioContactForm />
              </section>
            </main>
          </Suspense>
        </>
      )}
    </>
  );
}
