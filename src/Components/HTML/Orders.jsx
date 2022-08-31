import React, { useState, useEffect } from 'react'
import { db } from '../../firbase';
import { UseStateProvider } from '../Contexts/StateProvider';
import Orderauth from './Orderauth';

const Orders = () => {
    const [{ basket, user }, disPatch] = UseStateProvider();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if (user) {
            db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .orderBy("created", "desc")
                .onSnapshot((snapshot) =>
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data(),
                        }))
                    )
                );
        } else {
            setOrders([]);
        }
    }, [user]);
    
    return (
        <div className='order'>
            <h1 className='ms-5 mt-4 fs-1'>Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order) => (
                    
                    <Orderauth order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders;