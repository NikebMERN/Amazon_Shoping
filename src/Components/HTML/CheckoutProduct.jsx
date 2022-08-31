import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/CheckProduct.css';
import { UseStateProvider } from '../Contexts/StateProvider';

const CheckoutProduct = ({ id, title, price, imgone, imgtwo, imgthree, rip, zip, rating, hideButton }) => {
    const [{ basket }, dispatch] = UseStateProvider();
    const RemoveItems = () => {
        dispatch({
            type: 'removed',
            id: id
        })
    } 

    return (
            <div className="sup m-2 d-flex m-2 p-4 w-100 bg-white modal-dialog-centered mx-3 my-3">
                <div className='left'>
                    <div className='d-flex'>
                        <div className={`product_inf mb-3 fw-bolder m-2 ${rip}`}>
                            <img className='w-100 mb-3 ss d-flex my-auto ms-4 pe-5' src={imgone} alt="Amazon_Product" />
                        </div>
                        <div className={`product_inf mb-3 fw-bolder m-2 ${zip}`}>
                            <img className='w-75 pb-5 ss d-flex my-auto ms-4 pe-1' src={imgtwo} alt="Amazon_Product" />
                        </div>
                        <div className={`product_inf mb-3 fw-bolder m-2 ${zip}`}>
                            <img className='w-100 mb-3 ss d-flex my-auto ms-4 pe-1' src={imgthree} alt="Amazon_Product" />
                        </div>
                    </div>
                </div>
                <div className="right product_info fw-bolder text-center d-block my-auto">
                    <p className='fs-4'>{title}</p>
                    <div className="product_rating d-flex justify-content-space mx-auto ">
                        {Array(rating).fill().map(() => (
                            <div className="modal-dialog-centered d-flex ms-3 border border-2">
                                <p>🌟</p>
                                </div>
                            
                        ))}
                    </div>
                    <p className="product_price mt-1 text-start pb-3 ms-3">
                        <small>$</small><strong>{price}</strong>
                    </p>
                    
                </div>
                    <button className={`${!hideButton ? 'fw-bolder d-flex my-auto balon mx-auto' : 'd-none'}`} onClick={RemoveItems}>Remove from basket</button>
            </div>
    )
}

export default CheckoutProduct;