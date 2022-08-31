/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { UseStateProvider } from '../Contexts/StateProvider';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {   
    const [{ basket }, dispatch] = UseStateProvider();
    const navigate = useNavigate();

    const getBasketTotal = (basket) => basket?.reduce((amount, item) => Number(item.pri) + Number(amount), 0);
    
    return (
        <div className="subtotal d-flex justify-content-space p-4">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({ basket.length } items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift d-flex modal-dialog-centered mt-3">
                            <input type="radio" className='me-1' />
                            This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
<button className='bg-warning w-100 mt-2 text-dark fs-5' onClick={(e) => navigate('/payment')}>Procsed to chechout</button>
<marquee className="fs-4 border border-3">Always be certain when you use our service</marquee>
        </div>
    )
}

export default Subtotal;