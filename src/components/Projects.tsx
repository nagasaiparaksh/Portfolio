import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Code2, Star, GitFork } from 'lucide-react';

const projects = [
  {
    title: "Rock Paper Scissors Game",
    description: "Rock Paper Scissors - Web Game 🎮🪨📄✂️ A simple Rock Paper Scissors game built using HTML, CSS, and JavaScript. ",
    technologies: ["HTML", "CSS", "Java Script"],
    github: "https://github.com/nagasaiparaksh/rock-paper-scissors-game",
    live: "https://nagasaiparaksh.github.io/rock-paper-scissors-game/",
  },
  {
    title: "Pomodoro Timer",
    description: "A simple and effective Pomodoro Timer application built using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript",],
    github: "https://github.com/nagasaiparaksh/Pomodoro_Timer",
    live: "https://github.com/nagasaiparaksh/Pomodoro_Timer",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-bold font-poppins text-primary dark:text-secondary">
              Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Folder className="w-6 h-6 text-secondary" />
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-text hover:text-secondary dark:hover:text-secondary transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-text hover:text-secondary dark:hover:text-secondary transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold font-poppins text-primary dark:text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-text/80 font-inter mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-background/30 rounded-full text-sm text-gray-700 dark:text-text/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-text/60">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;