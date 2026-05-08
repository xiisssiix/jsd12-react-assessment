import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center p-4 border-b border-neutral-base bg-white">
      <ul className="flex gap-6 font-bold text-content-darker">
        <li>
          <a href="/" className="hover:text-primary-base transition-colors">Home</a>
        </li>
        <li>
          <a href="/owner" className="hover:text-primary-base transition-colors">Owner</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;