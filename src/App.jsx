import { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import CursorScrollWatcher from "./Components/CursorScrollWatcher";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import PortfolioContactForm from "./Components/PortfolioContactForm";
import AstronautCursor from "./Components/AstronautCursor";
import RevealOverlay from "./Components/RevealOverlay";
import Landing from "./Components/Landing";
import DisableWheelScroll from "./Components/DisableWheelScroll";
import { AnimatePresence, motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white text-3xl"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-4xl"
      >
        🚀 Loading...
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
      return () => video.removeEventListener("ended", handleEnded);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <DisableWheelScroll />
            <CursorScrollWatcher />
            <RevealOverlay />
            <AstronautCursor />
            <Navbar />

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

            <div className="bg-overlay fixed inset-0 -z-5"></div>

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
              <section id="contact" className="min-h-screen">
                <PortfolioContactForm />
              </section>
            </main>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
