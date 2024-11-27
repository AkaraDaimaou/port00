import { motion } from 'framer-motion';
import { Code2, Database, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <Database className="h-8 w-8 text-purple-600" />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-700 hover:text-indigo-600 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-700 hover:text-indigo-600 transition" />
            </a>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5 text-gray-700 hover:text-indigo-600 transition" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}