import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Banner from './Components/HTML/Banner';
import Header from './Components/HTML/Header';
import Nav from './Components/HTML/Nav';
import Checkout from './Components/HTML/Checkout';
import CheckoutProduct from './Components/HTML/CheckoutProduct';
import { UseStateProvider } from './Components/Contexts/StateProvider';
import Login from './Components/HTML/Login';
import auth from './firbase';
import FooterNav from './Components/HTML/FooterNav';
import Footer from './Components/HTML/Footer';
import AuthContextProvider from './Components/Contexts/AuthProvider';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import NoMatch from './Components/HTML/NoMatch';
import Payment from './Components/HTML/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/HTML/Orders';
// import Protected from './Components/Contexts/Protected';

const App = () => {
  const publishable = loadStripe('pk_test_51LbpjHHwS3wvuNiR6q4nIbGhbNAat7LhVqi2BDIZlBFzXdTud8kjIv04vmZXJhsl8LxzEmiUVgOx5ry3UTFuQko80084GOAXLI');
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#008e4e");
  const [{ basket }, dispatch] = UseStateProvider();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
    setLoading(false)
    }, 3995);
  }, [])

  useEffect(()=>{
    auth.onAuthStateChanged((authuser)=>{
      if (authuser) {
        dispatch({
          type: 'user',
          user: authuser
        })
      } else {
        dispatch({
          type: 'user',
          user: null
        })
      }
    } )
  }, [dispatch])

  return (
  <>
    {
      loading 
      ?  
      
      <ClimbingBoxLoader
      className='text-center d-flex justify-content-center align-item-center w-100 vh-100' 
      color={color} 
      loading={loading} 
      size={25} />

      :
      <AuthContextProvider className='displaying_area'>
      <Header />
      <Nav />

      <Routes>

        <Route index element={<Banner />} /> 
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutproduct" element={basket?.map(item => (
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
))} />
<Route path="/login" element={<Login />} />
<Route path="/payment" element={
  // basket?.map(item => (
    <Elements stripe={publishable}>
          <Payment 
          // className='d-flex'
          // id={item.id}
          // title={item.tit}
          // price={item.pri}
          // imgone={item.one}
          // imgtwo={item.two}
          // imgthree={item.three}
          // rip={item.rip}
          // zip={item.zip}
          // rating={item.rate}
          />
          </Elements>
// ))
} />
<Route path="/orders" element={<Orders />} />
<Route path="*" element={<NoMatch />} />

      </Routes>
      <FooterNav />
      <Footer />
      </AuthContextProvider>
   }
    </>
  )
}


// +  Deploy complete!

// Project Console: https://console.firebase.google.com/project/fir-9e294/overview
// Hosting URL: https://fir-9e294.web.app

export default App;
