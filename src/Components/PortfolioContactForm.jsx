import { useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";

export default function ContactSection() {
  const [showAttributions, setShowAttributions] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-[120vh] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      <img
        src="/assets/spaceDestation/space station.png"
        alt="Space station background"
        className="absolute bottom-0 md:w-[50%]  md:h-[90%] object-cover z-10 glowstation"
      />
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 flex-wrap z-20">
        <div className="hologramform relative mt-10 md:mt-0">
          <h2 className="text-xl flex justify-center font-bold mb-4">Contact Me</h2>
          <Form />
        </div>

        <div className="hologramform relative mt-10 md:mt-0 ">
          <h2 className="text-xl flex justify-center font-bold mb-2">Achievements</h2>
          <div className="h-68 overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="space-y-2"
            >
              <p>🏆 Runner-up - Coding Contest at Astra Tech Fest 2025</p>
              <p>🏆 Second Runner-up - Hackathon at Astra Tech Fest 2025</p>
              <p>🏆 Internal Hackathon for Smart India Hackathon 2024</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-6 z-20">
        <img
          src="/assets/seated/astronautSeated.png"
          alt="Seated Astronaut"
          className="w-[6rem] md:w-[7rem] mx-auto glowastronaut relative md:top-20"
        />
      </div>

      <button
        onClick={() => setShowAttributions(true)}
        className="absolute bottom-6 right-6 bg-white/10 hover:bg-white/20 text-sm px-3 py-1 rounded-full backdrop-blur-md z-30"
      >
        ⓘ Attributions
      </button>

      {showAttributions && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
        >
          <div className="bg-white/10 text-white p-6 rounded-xl md:max-w-xl w-[90%] md:max-h-[80vh] overflow-y-auto relative top-50 md:top-0">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">Attributions</h3>
              <button
                onClick={() => setShowAttributions(false)}
                className="text-white hover:text-red-400 text-xl"
              >
                ×
              </button>
            </div>
            <ul className="space-y-2 text-sm">
              <li>🌌 Background video – Pexels (free for non-commercial use)</li>
              <li>👨‍🚀 Astronaut (cursor) – AI-generated PNG</li>
              <li>🪐 Planets & Nebula – Pngwing (transparent PNGs)</li>
              <li>📡 Satellite image – Pngwing</li>
              <li>🔊 Sound: “Interstellar Sound” – Freesound.org (CC0)</li>
              <li>🖼️ More assets – Pixabay, Unsplash, Pngtree</li>
            </ul>
          </div>
        </motion.div>
      )}

      <p className="text-center text-sm text-black/100 mt-4 z-20 relative md:top-23">
        © 2025 Mehul Kumar Swarnber. All rights reserved.
      </p>
    </section>
  );
}
