import { Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

// Image Importing area
import logo from '../Resources/image/logo.png';

const Footer = () => {
  const year = new Date().getFullYear();
  // console.log(year);

  return (
    <footer>
      <div className="backTo pt-1">
        <Link to="#">Back to top</Link>
      </div>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get to Know US</h3>
          <Link to="">Careers</Link>
          <br />
          <Link to="">Blog</Link>
          <br />
          <Link to="">About Amazon</Link>
          <br />
          <Link to=""> Investor Relations</Link>
          <br />
          <Link to="">Amazon Devices</Link>
          <br />
          <Link to="">Amazon Science</Link>
          <br />
        </div>
        <div className="footr_details_one">
          <h3>Make money with Us</h3>
          <Link to=""> Sell Products on Amazon</Link>
          <br />
          <Link to="">Sell on Amazon Business</Link>
          <br />
          <Link to="">Sell apps on Amazon</Link>
          <br />
          <Link to="">Become an Affiliate</Link>
          <br />
          <Link to="">Advertise Your Products</Link>
          <br />
          <Link to="">Self-Publish with Us</Link>
          <br />
          <Link to="">Host an Amazon Hub</Link>
          <br />
          <Link to="">›See More Make Money with Us</Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Payment Products</h3>
          <Link to="">Amazon Business Card</Link>
          <br />
          <Link to="">Shop with Points</Link>
          <br />
          <Link to="">Reload Your Balance</Link>
          <br />
          <Link to="">Amazon Currency Converter</Link>
          <br />
        </div>
        <div className="footr_details_one forres">
          <h3>Let Us Help You</h3>
          <Link to="">Amazon and COVID-19</Link>
          <br />
          <Link to="">Your Account</Link>
          <br />
          <Link to="">Your Orders</Link>
          <br />
          <Link to="">
            Shipping Rates &<br /> Policies
          </Link>
          <br />
          <Link to="">
            Returns &<br /> Replacements
          </Link>
          <br />
          <Link to="">Manage Your</Link>
          <br />
          <Link to="">Content and Devices</Link>
          <br />
          <Link to="">Amazon Assistant</Link>
          <br />
          <Link to="">Help</Link>
          <br />
        </div>
      </div>
      <Divider
        style={{
          width: "100%",

          marginTop: 50,
          borderColor: "#dddddd",
        }}
      />
      <div className="footer_container2">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer_div">English</div>
        <div className="footer_div">$USD -U.S. Dollar</div>
        <div className="footer_div">Unitrd states</div>
      </div>
      <div className="lastdetails">
        <table>
          <th>Amazon Music </th>
          <th>Amazon</th>
          <th> Amazon Drive</th>
          <th>6pm</th>
          <th>AbeBooks</th>
          <th>ACX</th>
          <th>Alexa</th>
          <tr>
            <td>
              Stream millions <br />
              of songs
            </td>

            <td>
              Find, attract, and
              <br />
              engage customers
            </td>

            <td>
              Cloud storage <br />
              from Amazon
            </td>

            <td>
              Score deals <br /> on fashion <br />
              brands
            </td>

            <td>
              Books, art & <br /> collectibles
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Actionable <br /> Analytics <br />
              for the Web
            </td>
          </tr>
          <th>Sell on Amazon</th>
          <th>Amazon Business</th>
          <th> AmazonGlobal</th>
          <th>Home Services</th>
          <th>Amazon Ignite</th>
          <th> Amazon Web</th>
          <th>Audible</th>
          <tr>
            <td>
              Everything For
              <br /> Your Business
            </td>

            <td>
              Ship Orders
              <br /> Internationally
            </td>

            <td>
              Experienced Pros <br /> Happiness <br />
              Guarantee
            </td>

            <td>
              Sell your original <br /> Digital Educational Resources
            </td>

            <td>
              Scalable Cloud <br />
              Computing Services
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Listen to Books & <br />
              Original Audio Performances
            </td>
          </tr>
          <th>Amazon Music </th>
          <th>Amazon</th>
          <th> Amazon Drive</th>
          <th>6pm</th>
          <th>AbeBooks</th>
          <th>ACX</th>
          <th>Alexa</th>
          <tr>
            <td>
              Stream millions <br />
              of songs
            </td>

            <td>
              Find, attract, and
              <br />
              engage customers
            </td>

            <td>
              Cloud storage <br />
              from Amazon
            </td>

            <td>
              Score deals <br /> on fashion <br />
              brands
            </td>

            <td>
              Books, art & <br /> collectibles
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Actionable <br /> Analytics <br />
              for the Web
            </td>
          </tr>
          <th>Amazon Music </th>
          <th>Amazon</th>
          <th> Amazon Drive</th>
          <th>6pm</th>
          <th>AbeBooks</th>
          <th>ACX</th>
          <th>Alexa</th>
          <tr>
            <td>
              Stream millions <br />
              of songs
            </td>

            <td>
              Find, attract, and
              <br />
              engage customers
            </td>

            <td>
              Cloud storage <br />
              from Amazon
            </td>

            <td>
              Score deals <br /> on fashion <br />
              brands
            </td>

            <td>
              Books, art & <br /> collectibles
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Actionable <br /> Analytics <br />
              for the Web
            </td>
          </tr>
          <th></th>
          <th>Amazon</th>
          <th> Amazon Drive</th>
          <th>6pm</th>
          <th>AbeBooks</th>
          <th>ACX</th>
          <th>Alexa</th>
          <tr>
            <td></td>

            <td>
              Find, attract, and
              <br />
              engage customers
            </td>

            <td>
              Cloud storage <br />
              from Amazon
            </td>

            <td>
              Score deals <br /> on fashion <br />
              brands
            </td>

            <td>
              Books, art & <br /> collectibles
            </td>
            <td>
              Audiobook Publishing <br />
              Made Easy
            </td>
            <td>
              Actionable <br /> Analytics <br />
              for the Web
            </td>
          </tr>
        </table>

        {/* <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
          <br />
          <br />
          <h3>Sell on Amazon </h3>
          <Link to="">
            Start a Selling <br />
            Account
          </Link>
          <br />
          <br />
          <h3>Book Depository</h3>
          <Link to="">
            Books With Free <br /> Delivery <br /> Worldwide
          </Link>
          <br />
          <br />
          <h3>IMDbPro </h3>
          <Link to="">
            Get Info <br /> Entertainment <br /> Professionals <br /> Need
          </Link>
          <br />
          <br />
        </div>
        <div className="footr_details_one forres">
          <h3>
            Amazon <br /> Advertising
          </h3>
          <Link to="">
            Find, attract, and <br /> engage customers
          </Link>
          <br />
          <h3>
            Amazon <br /> Advertising
          </h3>
          <Link to="">
            Find, attract, and <br /> engage customers
          </Link>
          <h3>
            Amazon <br /> Advertising
          </h3>
          <Link to="">
            Find, attract, and <br /> engage customers
          </Link>
          <h3>
            Amazon <br /> Advertising
          </h3>
          <Link to="">
            Find, attract, and <br /> engage customers
          </Link>
          <h3>
            Amazon <br /> Advertising
          </h3>
          <Link to="">
            Find, attract, and <br /> engage customers
          </Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
        </div>
        <div className="footr_details_one forres">
          <h3>Amazon Music </h3>
          <Link to="">
            Stream millions <br /> of songs
          </Link>
        </div> */}
      </div>
      <p className="footer__last">
        Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
        &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1996-{year},
        Amazon.com, Inc. or its affiliates
      </p>
    </footer>
  );
};

export default Footer;
