// src/components/Resources.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Book, Youtube, Code, BookOpen, GraduationCap } from 'lucide-react';

const ResourceList = ({ resources, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 gap-4 overflow-hidden p-4"
      >
        {resources.map((resource, index) => (
          <motion.a
            key={index}
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start p-4 rounded-lg bg-gray-900/30 border border-gray-800/50 
                     hover:border-gray-700/50 backdrop-blur-sm transition-all duration-300 group"
          >
            <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              {resource.icon && <resource.icon className="w-5 h-5 text-blue-400" />}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-white group-hover:text-blue-400 font-medium transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{resource.description}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors ml-2" />
          </motion.a>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

const Resources = () => {
  const [openSection, setOpenSection] = useState(null);

  const resourceSections = {
    web: {
      title: "Web Development Resources",
      resources: [
        
        {
            icon: Youtube,
            title: "HTML Crash Course",
            description: "Complete HTML tutorial for beginners",
            link: "https://youtu.be/qz0aGYrrlhU"
          },
          {
            icon: Youtube,
            title: "CSS Crash Course",
            description: "Learn CSS fundamentals through practical examples",
            link: "https://youtu.be/1PnVor36_40"
          },
        {
          icon: Book,
          title: "JavaScript Complete Guide",
          description: "Comprehensive JavaScript tutorial covering basics to advanced topics",
          link: "https://www.w3schools.com/js/default.asp"
        },
        {
          icon: Code,
          title: "JavaScript Functions",
          description: "Learn about function definitions, parameters, and implementations",
          link: "https://www.w3schools.com/js/js_function_definition.asp"
        },
        {
          icon: Code,
          title: "JavaScript Loops",
          description: "Master different types of loops and their usage in JavaScript",
          link: "https://www.w3schools.com/js/js_loop_for.asp"
        },
        {
          icon: BookOpen,
          title: "Async JavaScript",
          description: "Understanding callbacks, promises, and asynchronous programming",
          link: "https://www.w3schools.com/js/js_callback.asp"
        },
        {
          icon: Code,
          title: "DOM Manipulation",
          description: "Learn to interact with the Document Object Model (DOM)",
          link: "https://www.w3schools.com/js/js_htmldom.asp"
        },
        {
          icon: BookOpen,
          title: "JavaScript APIs",
          description: "Introduction to working with APIs in JavaScript",
          link: "https://www.w3schools.com/js/js_api_intro.asp"
        }
      ]
    },
    ml: {
      title: "Machine Learning Resources",
      resources: [
        {
          icon: GraduationCap,
          title: "Coming Soon",
          description: "Machine Learning resources will be available soon!",
          link: "#"
        }
      ]
    }
  };

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Learning Resources</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {Object.entries(resourceSections).map(([key, section]) => (
            <div
              key={key}
              className="rounded-xl overflow-hidden border border-gray-800/50 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenSection(openSection === key ? null : key)}
                className="w-full flex items-center justify-between p-4 text-left 
                         bg-gray-900/30 hover:bg-gray-900/50 transition-colors"
              >
                <span className="font-semibold text-white">{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300
                             ${openSection === key ? 'rotate-180' : ''}`}
                />
              </button>
              <ResourceList
                resources={section.resources}
                isOpen={openSection === key}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;