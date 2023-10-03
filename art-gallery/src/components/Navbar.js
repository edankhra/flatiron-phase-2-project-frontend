import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/paintings">Paintings</Link>
                </li>
                <li>
                    <Link to="/add">Add Painting</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
