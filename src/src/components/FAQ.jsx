// src/components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`border border-gray-800/50 rounded-xl overflow-hidden
                ${isOpen ? 'bg-gray-900/30' : 'bg-gray-900/20'} 
                backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300`}
    >
      <motion.button
        whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.03)' }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-lg text-white/90 pr-8">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-400/80 transition-transform duration-500
                     ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: "easeOut"
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeIn"
                },
                opacity: {
                  duration: 0.25
                }
              }
            }}
            className="overflow-hidden border-t border-gray-800/50"
          >
            <div className="p-6 text-gray-300/90 leading-relaxed bg-gray-900/20">
              {typeof answer === 'string' ? (
                <p>{answer}</p>
              ) : (
                answer
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How to choose a project?",
      answer: (
        <div className="space-y-4">
          <p>Here's how you can choose your project:</p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Select a track (Web Development or Machine Learning)</li>
            <li>Install and set up the required tools and dependencies</li>
            <li>Follow along with the sessions</li>
            <li>Get hands-on experience while building your project</li>
          </ol>
        </div>
      )
    },
    {
      question: "Can I pick both projects?",
      answer: "While it's not recommended due to the intensive nature of each track, you can attend and follow both tracks. However, we suggest focusing on one track to get the most out of the program and create a high-quality project."
    },
    {
      question: "I use a different tech stack than the ones taught",
      answer: (
        <div className="space-y-4">
          <p>You have flexibility in your tech stack choice:</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Follow along with the taught stack during sessions</li>
            <li>After January 20th, you can either:
              <ul className="list-circle ml-5 mt-2 space-y-1">
                <li>Continue with the taught tech stack</li>
                <li>Switch to your preferred tech stack for project completion</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about Project Dev Rush
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;