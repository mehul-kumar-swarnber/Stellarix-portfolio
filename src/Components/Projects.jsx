import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RealorNot",
    description:
      "A fake news detection system using NLP and machine learning to classify news articles as real or fake. (click or hover to see image preview)",
    satellite: "/assets/satellites/sat1.png",
    preview: "/assets/previews/realornot.png",
    github: "https://github.com/mehul-kumar-swarnber/RealorNot.git",
    tech: ["JavaScript", "Python", "Machine Learning"],
    contributors: [
      {
        name: "Avinash Jaiswal",
        linkedin: "https://www.linkedin.com/in/avinash-jaiswal-8859b7282 ",
      },
      {
        name: "Nishtha Dewangan",
        linkedin: "https://www.linkedin.com/in/nishtha-dewangan-09aaa6337 ",
      },
      {
        name: "Prasidhee Mishra",
        linkedin: "https://www.linkedin.com/in/prasidhee-mishra-b144ab332 ",
      },
      {
        name: "Stuti Shivhare",
        linkedin: "https://www.linkedin.com/in/stuti-shivhare-919ba2213 ",
      },
    ],
  },
  {
    title: "Rights4U",
    description:
      "A quiz game for children to learn basic rights, built using HTML, CSS, JavaScript, and Tailwind CSS. (click or hover to see image preview)",
    satellite: "/assets/satellites/sat2.png",
    preview: "/assets/previews/rights4u.png",
    github: "https://github.com/mehul-kumar-swarnber/Rights4U.git",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    contributors: [
      {
        name: "Avinash Jaiswal",
        linkedin: "https://www.linkedin.com/in/avinash-jaiswal-8859b7282 ",
      },
      {
        name: "Nishtha Dewangan",
        linkedin: "https://www.linkedin.com/in/nishtha-dewangan-09aaa6337 ",
      },
      {
        name: "Prasidhee Mishra",
        linkedin: "https://www.linkedin.com/in/prasidhee-mishra-b144ab332 ",
      },
      {
        name: "Stuti Shivhare",
        linkedin: "https://www.linkedin.com/in/stuti-shivhare-919ba2213 ",
      },
      {
        name: "Vinay Kumar Sahu",
        linkedin: "https://www.linkedin.com/in/vinay-kumar-sahu-106313324 ",
      },
    ],
  },
  {
    title: "DoIt",
    description:
      "A simple to-do WebApp using React.js, Tailwind CSS, and Local Storage. (click or hover to see image preview)",
    satellite: "/assets/satellites/sat3.png",
    preview: "/assets/previews/todolist.png",
    github: "https://github.com/mehul-kumar-swarnber/DoIt.git",
    tech: ["React", "Tailwind", "Local Storage"],
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired web app that allows users to browse playlists, play songs, and control playback. (click or hover to see image preview)",
    satellite: "/assets/satellites/sat4.png",
    preview: "/assets/previews/spotifyclone.png",
    github: "https://github.com/mehul-kumar-swarnber/Spotify-Clone.git",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "MongoMocker",
    description:
      "Generates and inserts random user data into MongoDB with a click, using Express.js and Fetch API. (click or hover to see image preview)",
    satellite: "/assets/satellites/sat5.png",
    preview: "/assets/previews/mongomocker.png",
    github: "https://github.com/mehul-kumar-swarnber/MongoMocker.git",
    tech: ["HTML", "CSS", "Express", "MongoDB", "Fetch API"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
    setHovered(false);
  };

  return (
    <section
      id="projects"
      className="relative h-[120vh] w-full overflow-hidden text-white"
    >
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" />

      {/* <div className="relative z-10 h-full flex items-center justify-center"> */}

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
              ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth natural motion
            }}
          >

            <img
              src={project.satellite}
              alt="Satellite icon"
              className="w-20 h-20 md:w-[300px] md:h-[300px]  animate-spin-slow glowing-satellite"
            />

            <div
              className="group relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[280px] md:w-[500px] rounded-lg shadow-lg z-10 pointer-events-none
             bottom-full mb-4  md:top-auto md:bottom-75"
                  >
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="w-full h-auto rounded-lg"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="w-[23rem] md:w-[600px] bg-blue-300/10 backdrop-blur-lg border border-blue-400/20 p-6 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-300/5 transition-all overflow-hidden">
                <h3 className="text-base md:text-xl font-semibold">{project.title}</h3>
                <p className="text-xs md:text-sm mt-2 text-blue-100">
                  {project.description}
                </p>

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

                {project.contributors && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-blue-100 mb-1">Other Contributors:</h4>
                    <ul className="space-y-1 text-xs text-blue-200">
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
                )}


                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-blue-300 hover:text-white transition z-20"
                >
                  <FaGithub size={22} />
                </a>

                <button
                  onClick={nextProject}
                  className="mt-5 flex items-center text-blue-300 hover:text-white transition relative z-20"
                >
                  Next <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-20 left-10 z-10 w-20 h-20 md:w-[150px] md:h-[150px] glowing-rocket">
        <motion.div
          className="relative w-full h-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <img
            src="/assets/rocketdeimage/rocket.png"
            alt="Rocket"
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
