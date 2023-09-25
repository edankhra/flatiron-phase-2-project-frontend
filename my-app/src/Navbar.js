import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>Art Gallery</a>
      {/*Create Navbar with Home, about, pricing, contect*/}
      <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/pricing'>Pricing</a></li>
      <li><a href='/contect'>Contect</a></li>
      </ul>
    </nav>
  )
}

export default Navbar