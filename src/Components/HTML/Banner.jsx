import React from 'react';
import Products from './Products';
import Ads from './Ads';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Banner.css';

// Importing Image
import Refresh from '../Resources/image/Banner/Refresh.jpeg';
import Beauty from '../Resources/image/Banner/Beauty.jpeg';
import Dino from '../Resources/image/Banner/Dino.jpeg';
import Milloner from '../Resources/image/Banner/Milloner.jpeg';
import pro1 from '../Resources/image/Product/Game/pro1.jpg';
import pro2 from '../Resources/image/Product/Game/pro2.jpg';
import pro3 from '../Resources/image/Product/Game/pro3.jpg';
import pro4 from '../Resources/image/Product/Game/pro4.jpg';
import proc1 from '../Resources/image/Product/catagory/proc1.jpg';
import proc2 from '../Resources/image/Product/catagory/proc2.jpg';
import proc3 from '../Resources/image/Product/catagory/proc3.jpg';
import proc4 from '../Resources/image/Product/catagory/proc4.jpg';
import proe1 from '../Resources/image/Product/Electronics/proe1.jpg';
import proe2 from '../Resources/image/Product/Electronics/proe2.jpg';
import proh1 from '../Resources/image/Product/health/proh1.jpg';
import proco1 from '../Resources/image/Product/computer/proco1.jpg';
import prot1 from '../Resources/image/Product/Toys/prot1.jpg';
import prot2 from '../Resources/image/Product/Toys/prot2.jpg';
import prot3 from '../Resources/image/Product/Toys/prot3.jpg';
import prot4 from '../Resources/image/Product/Toys/prot4.jpg';
import proa1 from '../Resources/image/Product/activity/proa1.jpg';
import procr1 from '../Resources/image/Product/create/procr1.jpg';

function IndividualIntervalsExample() {
    return (
        <div className='home'>
            <Carousel>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Refresh}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Dino}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Milloner}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_container">
                        <Link to="/">
                            <img
                                className="d-block w-100 spirality home_image"
                                src={Beauty}
                                alt="Amazom_Image"
                            />
                        </Link>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div className="product-classification justify-content-space modal-dialog-centered">
                <div>
                <div className="product_row d-flex py-2 ms-5">
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Up to 42% off smart devices" rating={5} price="11.96" imgone={pro1} imgtwo={pro2} imgthree={pro3} imgfour={pro4} rip="d-flex" zip="d-flex" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Frequently repurchased in Grocery" rating={4} price="239" imgone={proc1} imgtwo={proc2} imgthree={proc3} imgfour={proc4} rip="d-flex" zip="d-flex" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Spy for free on Freevee" rating={4} price="149.99" imgone={proe1} rip="d-block" zip="d-none" />
                    </Link>
                </div>
                <div className="product_row col-sm-4 col-md-8 mx-1 col-lg-12 justify-content-space modal-dialog-centered">
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Stream Hotel Transylvania 2" rating={3} price="199.99" imgone={proh1} rip="d-block" zip="d-none" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Save 15% with less effort" price="98.99" rating={5} imgone={proco1} rip="d-block" zip="d-none" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Get your garden in shape" price="598.99" rating={4} imgone={proe2} rip="d-block" zip="d-none" />
                    </Link>
                    <Ads />
                </div>
                <div className="product_row d-flex py-2 ms-5">
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Save on overstock toys" rating={5} price="1094.98" imgone={prot1} imgtwo={prot2} imgthree={prot3} imgfour={prot4} rip="d-flex" zip="d-flex" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Exclusively at Amazon" rating={4} price="39.99" imgone={proa1} rip="d-block" zip="d-none" />
                    </Link>
                    <Link to="/" className='nav-logo-link navbar-toggler nav-progressive-attribute text-decoration-none clearlink'>
                    <Products id={Math.floor(Math.random() * 10)} title="Make learning fun" rating={2} price="400" imgone={procr1} rip="d-block" zip="d-none" />
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default IndividualIntervalsExample;