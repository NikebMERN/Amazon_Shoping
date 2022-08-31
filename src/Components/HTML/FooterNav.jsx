import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/FooterNav.css';
import { Link } from 'react-router-dom';
import auth from '../../firbase';
import { UseStateProvider } from '../Contexts/StateProvider';

const FooterNav = () => {
    const [{ basket, user }, dispatch] = UseStateProvider();

    const Spike = () => {
          if (user) {
            auth.signOut();
          }
    }

  return (
    <div className='text-center bg-white pb-1'>
        <hr />
        <p className="fse">See personalized recommendations</p>
        <Link to={ !user && '/login' } onClick={Spike} className='d-flex mx-auto mx-auto rounded-3 sublxex text-black text-decoration-none'><p className="bg-warning text-center btn me-2">{ user ? 'Sign Out' : 'Sign In' }</p></Link>
        <p className="fse">New customer? <Link to='/' className='text-decoration-none'>Start here.</Link></p>
        <hr />
    </div>
  )
}

export default FooterNav;