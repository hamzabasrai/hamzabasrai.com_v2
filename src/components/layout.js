import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <header className="py-4 sticky top-0 z-10">
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
