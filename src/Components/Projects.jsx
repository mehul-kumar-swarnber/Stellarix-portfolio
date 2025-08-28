import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RealorNot",
    description:
      "A fake news detection system using NLP and machine learning to classify news articles as real or fake.",
    satellite: "/assets/satellites/sat1.webp",
    preview: "/assets/previews/realornot.webp",
    github: "https://github.com/mehul-kumar-swarnber/RealorNot.git",
    tech: ["JavaScript", "Python", "Machine Learning"],
    contributors: [
      { name: "Avinash Jaiswal", linkedin: "https://www.linkedin.com/in/avinash-jaiswal-8859b7282" },
      { name: "Nishtha Dewangan", linkedin: "https://www.linkedin.com/in/nishtha-dewangan-09aaa6337" },
      { name: "Prasidhee Mishra", linkedin: "https://www.linkedin.com/in/prasidhee-mishra-b144ab332" },
      { name: "Stuti Shivhare", linkedin: "https://www.linkedin.com/in/stuti-shivhare-919ba2213" },
    ],
  },
  {
    title: "Rights4U",
    description:
      "A quiz game for children to learn basic rights, built using HTML, CSS, JavaScript, and Tailwind CSS.",
    satellite: "/assets/satellites/sat2.webp",
    preview: "/assets/previews/rights4u.webp",
    github: "https://github.com/mehul-kumar-swarnber/Rights4U.git",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    contributors: [
      { name: "Avinash Jaiswal", linkedin: "https://www.linkedin.com/in/avinash-jaiswal-8859b7282" },
      { name: "Nishtha Dewangan", linkedin: "https://www.linkedin.com/in/nishtha-dewangan-09aaa6337" },
      { name: "Prasidhee Mishra", linkedin: "https://www.linkedin.com/in/prasidhee-mishra-b144ab332" },
      { name: "Stuti Shivhare", linkedin: "https://www.linkedin.com/in/stuti-shivhare-919ba2213" },
      { name: "Vinay Kumar Sahu", linkedin: "https://www.linkedin.com/in/vinay-kumar-sahu-106313324" },
    ],
  },
  {
    title: "DoIt",
    description: "A simple to-do WebApp using React.js, Tailwind CSS, and Local Storage.",
    satellite: "/assets/satellites/sat3.webp",
    preview: "/assets/previews/todolist.webp",
    github: "https://github.com/mehul-kumar-swarnber/DoIt.git",
    tech: ["React", "Tailwind", "Local Storage"],
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired web app that allows users to browse playlists, play songs, and control playback.",
    satellite: "/assets/satellites/sat4.webp",
    preview: "/assets/previews/spotifyclone.webp",
    github: "https://github.com/mehul-kumar-swarnber/Spotify-Clone.git",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MongoMocker",
    description:
      "Generates and inserts random user data into MongoDB with a click, using Express.js and Fetch API.",
    satellite: "/assets/satellites/sat5.webp",
    preview: "/assets/previews/mongomocker.webp",
    github: "https://github.com/mehul-kumar-swarnber/MongoMocker.git",
    tech: ["HTML", "CSS", "Express", "MongoDB", "Fetch API"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [showContributors, setShowContributors] = useState(false);
  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
    setShowContributors(false);
  };

  return (
    <section id="projects" className="relative h-[120vh] w-full overflow-hidden text-white">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" />

      <div className="relative z-10 h-screen flex flex-col justify-end items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            className="relative flex flex-col md:flex-row items-center space-y-50 md:space-y-0 md:space-x-10"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Satellite */}
            <img
              src={project.satellite}
              loading="lazy"
              alt="Satellite icon"
              className="w-28 h-28 md:w-[300px] md:h-[300px] animate-spin-slow glowing-satellite flex-shrink-0 mb-6 md:mb-0"
            />

            {/* Card */}
            <div className="group relative w-[23rem] md:w-[600px]">
              {/* Preview Image */}
              <div className="w-full mb-4">
                <img
                  src={project.preview}
                  loading="lazy"
                  alt={`${project.title} preview`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Card Content */}
              <div className="relative bg-blue-300/10 backdrop-blur-lg border border-blue-400/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-300/5 transition-all overflow-hidden">
                <h3 className="text-base md:text-xl font-semibold">{project.title}</h3>
                <p className="text-xs md:text-sm mt-2 text-blue-100">{project.description}</p>

                <div className="mt-3 text-xs text-blue-200 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-400/10 border border-blue-400/20 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contributors Button */}
                {project.contributors && (
                  <div className="mt-4">
                    <button
                      onClick={() => setShowContributors(true)}
                      className="px-3 py-1 text-xs rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-200 hover:bg-blue-500/30 transition"
                    >
                      View Contributors
                    </button>
                  </div>
                )}

                {/* GitHub Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-blue-300 hover:text-white transition"
                >
                  <FaGithub size={22} />
                </a>

                <button
                  onClick={nextProject}
                  className="mt-5 flex items-center text-blue-300 hover:text-white transition"
                >
                  Next <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contributors Hover Card */}
      <AnimatePresence>
        {showContributors && project.contributors && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          >
            <div className="bg-blue-900/90 border border-blue-400/30 p-6 rounded-xl w-80 relative">
              <button
                onClick={() => setShowContributors(false)}
                className="absolute top-2 right-2 text-blue-200 hover:text-white"
              >
                <X size={18} />
              </button>
              <h4 className="text-sm font-semibold text-blue-100 mb-3">Contributors</h4>
              <ul className="space-y-2 text-xs text-blue-200">
                {project.contributors.map((contributor, index) => (
                  <li key={index}>
                    <a
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-300"
                    >
                      {contributor.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rocket */}
      <div className="absolute top-20 left-10 z-10 w-20 h-20 md:w-[150px] md:h-[150px] glowing-rocket">
        <motion.div
          className="relative w-full h-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <img
            src="/assets/rocketdeimage/rocket.webp"
            alt="Rocket"
            loading="lazy"
            className="w-full h-full object-contain rotate-13"
          />
          <span className="absolute inset-10 flex items-center justify-center text-black text-sm font-semibold pointer-events-none">
            Projects
          </span>
        </motion.div>
      </div>
    </section>
  );
}
