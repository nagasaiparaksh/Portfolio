import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-background dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-poppins text-primary dark:text-secondary text-center mb-12">
          Let’s Connect & Create!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white dark:bg-primary rounded-xl shadow-lg p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-8 h-8 text-secondary" />
                <span className="text-gray-700 dark:text-text/80 font-inter text-lg">
                  nagasaiparaksh@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-8 h-8 text-secondary" />
                <span className="text-gray-700 dark:text-text/80 font-inter text-lg">
                  +91 7760152890
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-8 h-8 text-secondary" />
                <span className="text-gray-700 dark:text-text/80 font-inter text-lg">
                  Bangalore, India
                </span>
              </div>
            </div>
            <form className="bg-white dark:bg-primary rounded-xl shadow-lg p-8 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-background border-2 border-transparent focus:border-secondary dark:focus:border-secondary outline-none text-gray-900 dark:text-text shadow-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-background border-2 border-transparent focus:border-secondary dark:focus:border-secondary outline-none text-gray-900 dark:text-text shadow-sm"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 dark:bg-background border-2 border-transparent focus:border-secondary dark:focus:border-secondary outline-none text-gray-900 dark:text-text shadow-sm"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-secondary text-primary dark:text-background px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-secondary/90 transition-all duration-300 shadow-md"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
