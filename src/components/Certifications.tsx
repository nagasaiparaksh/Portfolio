import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "2024",
    link: "https://drive.google.com/file/d/1WksFiPgLsoijU135hvUnpnc_7dU40cnQ/view?usp=drive_link"
  },
  {
    title: "Programming in JAVA",
    organization: "NPTEL",
    date: "2024",
    link: "https://drive.google.com/file/d/1cVszVz4ouy0o1XlsSAeAQ_KAGm23NtAi/view?usp=drive_link"
  },
  {
    title: "Programming in C++",
    organization: "Scaler",
    date: "2024",
    link: "https://drive.google.com/file/d/1ns3zStlxV8t7vuThmRFQHgK-FtmNLPyf/view?usp=drive_link"
  },
  {
    title: "Programming in C",
    organization: "Udemy",
    date: "2024",
    link: "https://drive.google.com/file/d/1LK9Wx9RR6jCrJ7CHIT8OnCjN5nxywKWo/view?usp=drive_link"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Award className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl font-bold font-poppins text-primary dark:text-secondary">
              Certifications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-primary rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-text/60 hover:text-secondary dark:hover:text-secondary"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold font-poppins text-primary dark:text-secondary mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-text/60 font-inter mb-4">
                  {cert.organization}
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-text/40">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{cert.date || "Date Not Available"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
