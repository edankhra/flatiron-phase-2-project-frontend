import React from 'react';
import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/" className="site-title">
        Art Gallery
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/paintings">Add Painting</Link>
        </li>
        <li>
          <Link to="/paintinglist">Painting List</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;