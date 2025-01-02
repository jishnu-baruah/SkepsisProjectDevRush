import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo as a link */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center group"
        >
          <img
            src="/ProjectDevRushLogo.png"
            alt="Logo"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
          />
          <h1 className="ml-4 text-2xl font-bold text-white tracking-wide transition-all duration-300 group-hover:text-blue-500">
            Project Dev Rush
          </h1>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-8 text-white shadow-lg md:shadow-none md:transition-none`}
        >
          {['#projects', '#timeline', '#setup', '#faq'].map((id, index) => (
            <li key={index}>
              <a
                href={id}
                onClick={(e) => handleLinkClick(e, id)}
                className="hover:text-blue-500 transition-colors duration-300 text-lg tracking-wide"
              >
                {id.replace('#', '').toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
