import React from 'react';

import GitHub from '../assets/github.inline.svg';
import LinkedIn from '../assets/linkedin.inline.svg';

const Footer = () => {
  return (
    <footer className="content-wrapper text-primary flex justify-between items-center my-2 lg:my-4">
      <p>© {new Date().getFullYear()} Hamza Basrai</p>
      <div className="space-x-4 flex justify-end">
        {/* <span>
          <a
            href="mailto:hamza.basrai@gmail.com"
            aria-label="Email hamza.basrai@gmail.com"
            title="Email"
          >
            <Envelope className="h-8 w-8 transition duration-100" />
          </a>
        </span> */}
        <span>
          <a
            href="https://github.com/hamzabasrai"
            aria-label="Visit GitHub profile"
            title="Visit GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="h-8 w-8 transition duration-100 fill-current" />
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
            <LinkedIn className="h-8 w-8 transition duration-100 fill-current" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
