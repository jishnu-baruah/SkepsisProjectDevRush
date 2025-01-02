// src/components/Communities.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquare, Send, Youtube } from 'lucide-react';
const SocialLink = ({ icon, title, subtitle, link, bgColor }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
    className={`flex flex-col items-center p-6 rounded-xl backdrop-blur-sm
                border border-gray-800 hover:border-opacity-50
                bg-gray-900/30 transition-colors duration-300 group ${bgColor}`}
  >
    {icon}
    <div className="text-center mt-4">
      <div className="font-medium text-white group-hover:text-blue-300">
        {title}
      </div>
      <div className="text-sm text-gray-400 mt-1">{subtitle}</div>
    </div>
  </motion.a>
);

const Communities = () => {
  const communityLinks = [
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: "WhatsApp (Dev Rush)",
      subtitle: "Project Dev Rush Group",
      link: "https://chat.whatsapp.com/HbJrjsQwvea8EZ6448cf12",
      bgColor: "hover:bg-green-900/20"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-400" />,
      title: "WhatsApp",
      subtitle: "Community Group",
      link: "https://chat.whatsapp.com/Im0XRep2Z5VDxdlpec6dWE",
      bgColor: "hover:bg-green-900/20"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
      title: "Discord",
      subtitle: "Join our Discord Server",
      link: "https://discord.gg/pzmyzkDQz2",
      bgColor: "hover:bg-indigo-900/20"
    },
    {
      icon: <Send className="w-8 h-8 text-blue-400" />,
      title: "Telegram",
      subtitle: "Join Telegram Channel",
      link: "https://t.me/skepsis2024",
      bgColor: "hover:bg-blue-900/20"
    },
    {
      icon: <Youtube className="w-8 h-8 text-red-500" />,
      title: "YouTube",
      subtitle: "Subscribe to our Channel",
      link: "https://www.youtube.com/@SKEPSIS-SNU",
      bgColor: "hover:bg-red-900/20"
    }
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-t from-black to-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-purple-900/20" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Communities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with fellow developers and stay updated
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          {communityLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.instagram.com/skepsis.official/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-pink-400 transition-colors">
              <motion.svg whileHover={{ scale: 1.1 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </motion.svg>
            </a>
            <a href="https://x.com/skepsis_snu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <motion.svg whileHover={{ scale: 1.1 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </motion.svg>
            </a>
            <a href="https://www.linkedin.com/company/skepsis-snu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-blue-400 transition-colors">
              <motion.svg whileHover={{ scale: 1.1 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </motion.svg>
            </a>
            <a href="https://www.youtube.com/@SKEPSIS-SNU" 
   target="_blank" 
   rel="noopener noreferrer"
   className="text-gray-400 hover:text-red-500 transition-colors">
  <motion.svg whileHover={{ scale: 1.1 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </motion.svg>
</a>
          </div>
          
          <div className="text-center text-gray-400">
            <p>Organized by Skepsis</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Communities;