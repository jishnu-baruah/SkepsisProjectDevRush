// src/components/SetupRequirement.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Github, Database, ExternalLink } from 'lucide-react';

const RequirementCard = ({ icon, title, description, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, x: 0 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl 
               border border-gray-700/50 hover:border-blue-500/50 
               transition-all duration-300 cursor-pointer group"
  >
    <div className="p-3 rounded-lg bg-blue-600/10 group-hover:bg-blue-600/20 
                    transition-colors duration-300">
      {icon}
    </div>
    <div className="ml-4 flex-1">
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 
                     transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-blue-400 
                            transition-colors duration-300" />
  </motion.a>
);

const SetupRequirement = () => {
  const tools = [
    {
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      title: "Visual Studio Code",
      description: "Download and install the code editor",
      link: "https://code.visualstudio.com/download"
    },
    {
      icon: <Terminal className="w-6 h-6 text-green-400" />,
      title: "Node.js",
      description: "Download and install Node.js runtime",
      link: "https://nodejs.org/"
    },
    {
      icon: <Terminal className="w-6 h-6 text-orange-400" />,
      title: "Git Bash",
      description: "Download and install Git command line tools",
      link: "https://git-scm.com/downloads"
    }
  ];

  const accounts = [
    {
      icon: <Github className="w-6 h-6 text-white" />,
      title: "GitHub Account",
      description: "For version control and collaboration",
      link: "https://github.com/signup"
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: "Kaggle Account",
      description: "For Machine learning track participants",
      link: "https://www.kaggle.com/account/login"
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "MongoDB Atlas",
      description: "Sign up for MongoDB cloud database",
      link: "https://www.mongodb.com/cloud/atlas/register"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative py-16">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-purple-900/20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-white mb-8">Prerequisites & Setup</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tools Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Required Tools & Accounts
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <RequirementCard key={index} {...tool} />
              ))}
            </div>
          </motion.div>

          {/* Accounts Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">
              Required Accounts
            </h3>
            <div className="space-y-4">
              {accounts.map((account, index) => (
                <RequirementCard key={index} {...account} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SetupRequirement;