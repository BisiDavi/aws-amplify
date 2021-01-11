import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
const Nav = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default Nav;
