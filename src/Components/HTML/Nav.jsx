import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Nav.css';

const Nav = () => {
  return (
    <nav className='d-flex fs-6 nav_wrapper'>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>☰All</h3>
        </Link>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>Today Deals</h3>
        </Link>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>Customer Service</h3>
        </Link>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>Registry</h3>
        </Link>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>Gift Card</h3>
        </Link>
        <Link to="/" className='CLear_Link_Border text-white my-1 mx-2 me-3'>
        <h3 className='nav-logo-link navbar-toggler nav-progressive-attribute'>Sell</h3>
        </Link>
    </nav>
  )
}

export default Nav