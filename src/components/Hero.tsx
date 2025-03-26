import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-secondary shadow-lg"
        >
          <img
            src="pp_me.png" // Ensure this image is placed inside the public folder
            alt="Y Naga Sai Paraksh"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-6">
            <span className="text-primary-light dark:text-text">Hi, I'm </span>
            <span className="text-secondary-light dark:text-secondary">Y Naga Sai Paraksh</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins text-text-light dark:text-text/80 mb-8">
          Software Developer & AI Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-text-light/80 dark:text-text/60 max-w-2xl mx-auto md:mx-0 mb-12 font-inter">
          Passionate about Competitive Programming, Data Structures & Algorithms, and Web Development. Exploring the intersection of Artificial Intelligence and Machine Learning to build innovative and scalable solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <motion.a
              href="https://github.com/nagasaiparaksh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-text-light dark:text-text hover:text-secondary-light dark:hover:text-secondary transition-colors duration-300"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/nagasaiparaksh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-text-light dark:text-text hover:text-secondary-light dark:hover:text-secondary transition-colors duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:your.nagasaiparaksh@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-text-light dark:text-text hover:text-secondary-light dark:hover:text-secondary transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>

          {/*Resume Button*/}
          <a
            href="https://drive.google.com/file/d/1_ffRf6eYsC5Ee5i-MjiQlfZnVAuzpjZs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary-light dark:bg-secondary text-white dark:text-background px-8 py-3 rounded-full font-poppins font-semibold hover:bg-secondary-light/90 dark:hover:bg-secondary/90 transition-colors duration-300"
            >
              Resume
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
