import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Code2, 
  Database, 
  Cpu, 
  BrainCircuit 
} from "lucide-react";

// Import skill logos (example URLs, replace with actual icons)
const skillLogos = {
  HTML: "https://cdn-icons-png.flaticon.com/128/919/919827.png",
  CSS: "https://cdn-icons-png.flaticon.com/128/919/919826.png",
  JavaScript: "https://cdn-icons-png.flaticon.com/128/919/919828.png",
  React: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  Tailwind: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  C: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
  Cpp: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
  Python: "https://cdn-icons-png.flaticon.com/128/1822/1822899.png",
  SQL: "https://cdn-icons-png.flaticon.com/128/4492/4492311.png"
};

const skillCategories = [
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-secondary" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    skills: ["C", "Cpp", "Python"]
  },
  {
    title: "Database Management",
    icon: <Database className="w-8 h-8 text-secondary" />,
    skills: ["SQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-12">
            <BrainCircuit className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-bold font-poppins text-primary dark:text-secondary">
              Skills
            </h2>
          </div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-primary rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold font-poppins text-primary dark:text-secondary">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Icons */}
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center">
                      <img
                        src={skillLogos[skill]}
                        alt={skill}
                        className="w-12 h-12 transition-transform transform hover:scale-110"
                      />
                      <span className="text-gray-700 dark:text-text/80 font-inter text-sm mt-2">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
