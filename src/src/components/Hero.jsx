import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const timeLeft = useCountdown('2025-01-04T19:00:00+05:30');

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
      {/* Animated background element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800 rounded-full blur-3xl transform rotate-45 scale-150"
      />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Welcome to Project Dev Rush
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-8">
            January 2nd - January 28th, 2025
          </p>
          
          <p className="text-2xl md:text-4xl text-white mb-12">
            Next session starting in
          </p>
     
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <div className="text-5xl font-bold text-white mb-2">{value}</div>
                <div className="text-blue-300 text-sm uppercase tracking-wider">{unit}</div>
              </div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center cursor-pointer"
            onClick={handleScrollToProjects}
          >
            <ChevronDown className="text-blue-400 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;