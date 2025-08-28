import { motion } from "framer-motion";
import { Rocket, Target, CheckCircle2, Badge } from "lucide-react";

const experiences = [
  {
    mission: "Full Stack Developer – CodeAlpha",
    status: "Completed Orbit Jun 2025–Jul 2025",
    objective:
      "Developed a responsive e-commerce platform with product catalog, shopping cart, and checkout flow, and a web-based task manager with user authentication, task CRUD, and deadline reminders.",
    outcome:
      "Enhanced user experience and productivity; improved e-commerce load time by 40% and streamlined task management, boosting task creation and tracking efficiency by 30%.",
  },
  {
    mission: "Vocational Training – IIT Naya Raipur",
    status: "Completed Orbit Jun 2025–Aug 2025",
    objective:
      "Developed a deep learning model to predict respiratory diseases from lung sound recordings.",
    outcome:
      "Achieved 90%+ prediction accuracy, improving early diagnosis potential and model reliability for healthcare applications.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white px-6"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-widest flex items-center gap-2">
        <Rocket className="text-blue-400 w-7 h-7" />
        Mission Logs
      </h2>

      {/* Cards */}
      <div className="grid gap-8 max-w-4xl w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-blue-300/10 backdrop-blur-lg border border-blue-400/20 
                       rounded-xl p-6 shadow-lg hover:shadow-blue-400/30 hover:bg-blue-300/5 
                       transition-all"
          >
            {/* Mission Title */}
            <h3 className="text-lg md:text-xl font-semibold text-blue-100 mb-4 flex items-center gap-2">
              <Badge className="text-blue-400 w-5 h-5 shrink-0" />
              <span>{exp.mission}</span>
            </h3>

            {/* Mission Details */}
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-start gap-2">
                <Rocket className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">STATUS:</span> {exp.status}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">OBJECTIVE:</span>{" "}
                  {exp.objective}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>
                  <span className="font-semibold">OUTCOME:</span> {exp.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
