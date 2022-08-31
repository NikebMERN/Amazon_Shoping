import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Header.css';
import { UseStateProvider } from '../Contexts/StateProvider';
import auth from '../../firbase';
// import { UserAuth } from '../Contexts/AuthProvider';

// Importing Images
import logo from '../Resources/image/logo.png';
import America from '../Resources/image/America.png';

const Header = () => {
    const [{ basket, user }, dispatch] = UseStateProvider();
    // const { googleSignIn, users } = UserAuth();

    const Signout = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <header className='header_wrapper d-flex position-sticky modal-dialog-centered'>
            <Link to="/" className=' nav-logo-link nav-progressive-attribute CLear_Link_Borderb navbar-expand' aria-label="Amazon">
                <img src={logo} alt="Amazon Logo" className='header_logo pb-1 ms-2 me-3' />
            </Link>
            <Link tabindex="0" to="/" className='navbar-toggler CLear_Link_Border'>
                <div className="header_nav d-flex">
                    <div className="header_option header_optionlocation d-flex mx-2 text-white text-center me-2">
                        <span className="header_optionLineOne ms-3">Deliver to</span>
                        <div className='d-flex'><LocationOnOutlinedIcon className='text-white header_location' />
                            <span className="header_optionLinetwo fw-bolder">Ethiopia</span></div>
                    </div>
                </div>
            </Link>
            <select className="modal-dialog-centered header_optionChocice" style={{ display: "block", top: "2.5px", backgroundColor: "#dadada" }}>
                <option value="selected">All</option>
                <option value="#">All Departments</option>
                <option value="#">Arts &amp; Crafts</option>
                <option value="#">Automotive</option>
                <option value="#">Baby</option>
                <option value="#">Beauty &amp; Personal Care</option>
                <option value="#">Books</option>
                <option value="#">Boys' Fashion</option>
                <option value="#">Computers</option>
                <option value="#">Deals</option>
                <option value="#">Digital Music</option>
                <option value="#">Electronics</option>
                <option value="#">Girls' Fashion</option>
                <option value="#">Health &amp; Household</option>
                <option value="#">Home &amp; Kitchen</option>
                <option value="#">Industrial &amp; Scientific</option>
                <option value="#">Kindle Store</option>
                <option value="#">Luggage</option>
                <option value="#">Men's Fashion</option>
                <option value="#">Movies &amp; TV</option>
                <option value="#">Music, CDs &amp; Vinyl</option>
                <option value="#">Pet Supplies</option>
                <option value="#">Prime Video</option>
                <option value="#">Software</option>
                <option value="#">Sports &amp; Outdoors</option>
                <option value="#">Tools &amp; Home Improvement</option>
                <option value="#">Toys &amp; Games</option>
                <option value="#">Video Games</option>
                <option value="#">Women's Fashion</option>
            </select>
            <div className='header_search d-flex'>
                <input type="text" className="nav-input nav-progressive-attribute header_searchinput  modal-dialog-centered p-2" />
                <SearchSharpIcon className='header_searchIcon p-1 bg-warning' />
            </div>
            <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute'>
                <div className="amercia_logo d-flex CLear_Link_Border">
                    <img className='america_logo my-1 ms-1 me-0 mx-3' src={America} alt="America Logo" />
                    <select className="modal-dialog-centered header_optionChocice" style={{ backgroundColor: "white", height: "5px", width: "5px" }}>
                        <option value="">Select</option>
                        <option value="">Amazon</option>
                    </select>
                </div>
            </Link>
            <div className="header_nav d-flex">
                <Link to={ !user && '/login' } className='nav-logo-link navbar-toggler nav-progressive-attribute'>
                    <div className="header_option d-flex mx-2 text-white CLear_Link_Border" onClick={Signout}>
                        <span className={`${ !user ? 'header_optionLineOne' : 'text-center fs-5 btn rounded-6 text-white bg-warning pb-1' } `}>{ !user ? 'Hello Guest' : user?.email[0].toUpperCase()  }</span>
                        {/* user ? "Guest" : user?.email */}
                        <span className="header_optionLinetwo fw-bolder">{ user ? '' : 'Sign In' }</span>
                    </div>
                </Link>
                <Link to="/orders" className='nav-logo-link navbar-toggler nav-progressive-attribute'>
                    <div className="header_option d-flex mx-2 text-white CLear_Link_Border">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLinetwo fw-bolder">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute'>
                    <div className="header_option d-flex mx-2 text-white CLear_Link_Border">
                        <span className="header_optionLineOne">You</span>
                        <span className="header_optionLinetwo fw-bolder">Prime</span>
                    </div>
                </Link>
            </div>
            <Link to="/checkout" className='nav-logo-link navbar-toggler nav-progressive-attribute'>
                <div className="nav-cart-count-container pb-0 position-relative float-none header_optionbasket modal-dialog-centered CLear_Link_Border">
                    <span class="nav-cart-icon nav-sprite"><ShoppingCartOutlinedIcon className='text-white the_cart' /></span>
                    <span class="nav-cart-count nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content text-warning fw-bolder p-2 header_optionLinetwo header_basketcount mx-1 fs-4">{ basket.length }</span>
                </div>
            </Link>
        </header >
    )
}

export default Header;