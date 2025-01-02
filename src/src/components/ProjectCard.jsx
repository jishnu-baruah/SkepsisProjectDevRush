import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, track, description, features }) => {
  const isML = track === 'ML';

  const handleLearnMore = () => {
    alert('GitHub link will be provided after the session.');
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-md border 
                ${isML ? 'border-purple-500/20 bg-purple-950/10' : 'border-blue-500/20 bg-blue-950/10'}
                p-6 transition-all duration-300 group`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isML ? 'bg-gradient-to-br from-purple-900/20 to-transparent' : 
                            'bg-gradient-to-br from-blue-900/20 to-transparent'}`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm
                        ${isML ? 'text-purple-400 bg-purple-900/20' : 'text-blue-400 bg-blue-900/20'}`}>
            {isML ? <Brain className="w-4 h-4 mr-2" /> : <Code2 className="w-4 h-4 mr-2" />}
            {isML ? 'Machine Learning Track' : 'Web Development Track'}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <ChevronRight className={`w-5 h-5 mr-2 mt-1 
                                    ${isML ? 'text-purple-400' : 'text-blue-400'}`} />
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLearnMore}
          className={`mt-6 px-4 py-2 rounded-lg text-white 
                   ${isML ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'}
                   transition-colors duration-300`}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;