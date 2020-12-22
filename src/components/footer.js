import React from 'react';

import GitHub from '../assets/github.inline.svg';
import LinkedIn from '../assets/linkedin.inline.svg';

const Footer = () => {
  return (
    <footer className="text-primary bg-secondary py-2 lg:py-4">
      <div className="content-wrapper flex justify-between items-center">
        <p>© {new Date().getFullYear()} Hamza Basrai</p>
        <div className="space-x-3 md:space-x-4 flex justify-end">
          <span>
            <a
              href="https://github.com/hamzabasrai"
              aria-label="Visit GitHub profile"
              title="Visit GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="h-7 w-7 md:h-8 md:w-8 transition duration-100 opacity-75 hover:opacity-100 fill-current" />
            </a>
          </span>
          <span>
            <a
              href="https://linkedin.com/in/hamzabasrai"
              aria-label="Visit LinkedIn profile"
              title="Visit LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="h-7 w-7 md:h-8 md:w-8 transition duration-100 opacity-75 hover:opacity-100 fill-current" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
