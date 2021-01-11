import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
          <Link to="/auth">Signup or Login</Link>
          <Link to="/api/coins">Coinbase</Link>
          <Link to="/api/notes">Notes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
