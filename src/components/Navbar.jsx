import React from 'react';
import { Link } from 'react-router-dom'; // ใช้ Link แทน a href

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center p-4 border-b border-neutral-base bg-white">
      <ul className="flex gap-6 font-bold text-content-darker">
        <li>
          <Link to="/" className="hover:text-primary-base transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/owner" className="hover:text-primary-base transition-colors">Owner</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;