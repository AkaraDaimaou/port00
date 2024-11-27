import { motion } from 'framer-motion';
import { Terminal, Brain, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <Terminal className="h-12 w-12 text-indigo-600" />
            <Brain className="h-12 w-12 text-purple-600" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Web Developer & <br />
            Data Scientist
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Crafting beautiful web experiences and deriving insights from data
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}