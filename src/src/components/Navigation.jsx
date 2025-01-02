import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/ProjectDevRushLogo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="ml-4 text-2xl font-bold text-white"
            >
              Project Dev Rush
            </motion.h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
        {['Timeline', 'Projects', 'Setup', 'FAQ'].map((item) => (
          <motion.a
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`#${item.toLowerCase()}`}
            onClick={(event) => handleLinkClick(event, `#${item.toLowerCase()}`)}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        className="md:hidden bg-black/90 backdrop-blur-md"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Timeline', 'Projects', 'Setup', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(event) => handleLinkClick(event, `#${item.toLowerCase()}`)}
              className="block px-3 py-2 text-white hover:bg-blue-600/20 rounded-md"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;