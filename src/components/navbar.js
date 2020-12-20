import { Link } from 'gatsby';
import React from 'react';

import Menu from '../assets/menu.svg';
import Cross from '../assets/cross.svg';

const NavLink = ({ title, ...props }) => (
  <Link className="font-medium text-xl tracking-tight" {...props}>
    {title}
  </Link>
);

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl md:hidden">
          <Link to="/">HB</Link>
        </h1>
        <h1 className="hidden font-semibold text-3xl tracking-tight md:block">
          <Link to="/">Hamza Basrai</Link>
        </h1>

        {/* Desktop Menu Links*/}
        <div className="hidden md:block">
          <div className="flex justify-end space-x-8">
            <NavLink to="/" title="About" />
            <NavLink to="/" title="Projects" />
            <NavLink to="/" title="Collections" />
            <NavLink to="/" title="Resume" />
          </div>
        </div>

        {/*  Mobile Menu Button  */}
        <div className="flex md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            {menuIsOpen ? (
              <Cross className="h-10 w-10" />
            ) : (
              <Menu className="h-10 w-10" />
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
          <NavLink to="/" title="About" />
          <NavLink to="/" title="Projects" />
          <NavLink to="/" title="Collections" />
          <NavLink to="/" title="Resume" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
