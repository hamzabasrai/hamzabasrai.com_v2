import { Link } from 'gatsby';
import React from 'react';

import Menu from '../assets/menu.inline.svg';
import Cross from '../assets/cross.inline.svg';
import ThemeToggle from './theme-toggle';

const NavLink = ({ title, ...props }) => (
  <Link className="text-xl text-secondary hover:text-accent" {...props}>
    {title}
  </Link>
);

// Generate NavLinks from query data
const NavItems = () => (
  <>
    <NavLink to="/" title="About" />
    <NavLink to="/" title="Projects" />
    <NavLink to="/" title="Collections" />
    <NavLink to="/" title="Resume" />
  </>
);

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <header className="py-4 md:pt-8 sticky top-0 z-10 text-secondary bg-primary">
      <nav className="content-wrapper">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-3xl md:hidden">
            <Link to="/">HB</Link>
          </h1>
          <h1 className="hidden font-medium text-2xl lg:text-3xl md:block">
            <Link to="/">Hamza Basrai</Link>
          </h1>

          {/* Desktop Menu Links*/}
          <div className="hidden md:block">
            <div className="flex justify-end items-center space-x-8">
              <NavItems />
              <ThemeToggle />
            </div>
          </div>

          {/*  Mobile Menu Button  */}
          <div className="flex space-x-4 items-center md:hidden">
            <ThemeToggle />
            <button
              className="outline-none focus:outline-none"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              {menuIsOpen ? (
                <Cross className="h-9 w-9" />
              ) : (
                <Menu className="h-9 w-9" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          onClick={() => setMenuIsOpen(false)}
          className={`${menuIsOpen ? 'block' : 'hidden'} md:hidden`}
        >
          <div className="mt-4 flex flex-col space-y-2">
            <NavItems />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
