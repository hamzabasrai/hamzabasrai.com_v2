import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen flex flex-col container mx-auto px-4 md:px-10">
        <header className="mt-4 md:mt-8 py-4 sticky top-0 z-10 bg-blueGray-50">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="self-center py-2">
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
