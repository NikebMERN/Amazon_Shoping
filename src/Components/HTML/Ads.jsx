import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Ads.css';
import { UseStateProvider } from '../Contexts/StateProvider';
import { Link } from 'react-router-dom';
import auth from '../../firbase';

// Images
import ADS from '../Resources/image/ADS.jpg'

const Ads = () => {
  const [{ basket, user }, dispatch] = UseStateProvider();

  const Spike = () => {
        if (user) {
          auth.signOut();
        }
  }

  return (
    <div className="ADS m-2 p-4 w-100 bg-white">
      <div className="sign-in">
        <p className="fs-6 text-center">Sign in for the best Experince</p>
        <Link to={ !user && '/login' } onClick={Spike} className='d-flex mx-auto bg-warning mx-auto rounded-3 py-2 sublxxex text-black text-decoration-none'>{ user ? 'Sign Out' : 'Sign In Securly' }</Link>
      </div>
      <br />
      <div className="million-product">
        <img className='w-100' src={ADS} alt="" />
      </div>
    </div>
  )
}

export default Ads;