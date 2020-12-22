import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-grow content-wrapper">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
