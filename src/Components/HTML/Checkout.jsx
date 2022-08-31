import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Checkout.css"
import { Link } from 'react-router-dom';
import Subtotal from './Subtotal';
import { UseStateProvider } from '../Contexts/StateProvider';

// Importing Images
import checkout from '../Resources/image/checkout.svg';

const Checkout = () => {
    const [{ basket, user }, dispatch] = UseStateProvider();

    return (
        <div className=" d-flex p-4 checking bg-white bg-secondary">
            <div className="left ">
                <img src={checkout} alt="" className='w-100 mb-2 img my-3' />
                <h3>Hello { user?.email }</h3>
                <h2 className='me-3 p-3 tittle'>Your in the basket</h2>
                <Link to="/checkoutproduct" className='fs-6'>Checkout Product</Link>
            </div>

            <div className="right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;