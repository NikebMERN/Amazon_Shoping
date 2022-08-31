import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/Payment.css";
import { UseStateProvider } from "../Contexts/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from '../../axios';
import { db } from "../../firbase";

const Payment = () => {
    const navigate = useNavigate();
	const [{ basket, user }, dispatch] = UseStateProvider();
	const getBasketTotal = (basket) => basket.reduce((amount, item) => Number(item.pri) + Number(amount), 0);
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
            // console.log(response)
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
    }, [basket]);
    // console.log('secret', clientSecret);
	const handleSubmit = async (e) => {
		e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card:elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent=payment confirmation
            console.log(paymentIntent)
			db.collection('users')
				.doc(user?.uid)
				.collection('orders')
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created
				});
			
            setSucceeded(true);
            setError(null);
			setProcessing(false);
			dispatch({
				type: 'EMPTY'
			});
            navigate('/orders');
        })
	};
	const handleChange = (e) => {
		// console.log(e);
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className='bg-white mt-3'>
            <h1 className='fs-1 fw-normal text-center sike' style={{backgroundColor: "#eaeded"}}>CheckOut (<Link to="/checkout" className='text-decoration-none'>{basket.length} item</Link>)</h1>
            <div className="my-4">
                <div className="payment__section d-flex p-4 mx-4">
                    <div className="payment__title">
                        <h1 className="fs-4 fw-bolder">Delivery <br className='mt-2' /> Address</h1>
                    </div>
                    <div className="payment__address">
                        <p className="fs-6 mb-1">{user?.email}</p>
                        <p className="fs-6 mb-1">123 React Lane</p>
                        <p className="fs-6 mb-1">Ethiopia</p>
                    </div>
                </div>
                <div className="payment__section d-flex p-4 mx-4">
                    <div className="payment__title">
                        <h1 className="fs-4 fw-bolder me-5">Review items <br className='mt-2' /> and delivery</h1>
                    </div>
                    <div className="payment__address">
                        {basket?.map(item => (
                            <CheckoutProduct
                                className='d-flex'
                                id={item.id}
                                title={item.tit}
                                price={item.pri}
                                imgone={item.one}
                                imgtwo={item.two}
                                imgthree={item.three}
                                rip={item.rip}
                                zip={item.zip}
                                rating={item.rate}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section d-flex p-4 mx-4">
                <div className="payment__title">
                        <h1 className="fs-4 fw-bolder">Payment <br className='mt-2' />  Method</h1>
                    </div>
                    <div className="payment__address">
                        <form action="#" onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__pricecontainer">
                        <CurrencyFormat
                renderText={(value) => <h1 className='fs-2'>Order Total: {value}</h1>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
                        </div>
                        {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Payment;