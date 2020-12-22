import React from 'react';

import Moon from '../assets/moon.inline.svg';
import Sun from '../assets/sun.inline.svg';

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const htmlNode = document.querySelector('html');
    if (isDark) {
      htmlNode.classList.add('dark');
    } else {
      htmlNode.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      className="outline-none focus:outline-none"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <Sun className="h-8 w-8 hover:text-accent" />
      ) : (
        <Moon className="h-8 w-8 hover:text-accent" />
      )}
    </button>
  );
};

export default ThemeToggle;
