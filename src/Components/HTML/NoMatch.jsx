import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/NoMatch.css'
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
    const [navigateing, setNavigateing] = useState('');

    const navigate = useNavigate();

    const OK = () => {
        // console.log(navigateing);
        navigate(navigateing);
    }

    return (
        <div>
            <div className="d-flex justify-content-center align-item-center w-100 middle">
                <h1 className='text-center fs-1'>The Page You Are Looking for <br /> can not find.</h1>
            </div>

            <div className="d-flex justify-content-center align-item-center w-100">
                <p className='text-center fs-3 mt-4 mb-5'>Write the Path You are Looking for.</p>
            </div>

            <div className='d-flex justify-content-center align-item-center w-100'>
            <input type="text" value={navigateing} onChange={e => setNavigateing(e.target.value)} placeholder='Path Looking for' className='px-5 py-1 text-start'/>
            </div>

            <div className='d-flex justify-content-center align-item-center w-100 my-5'>
            <button type="submit" className='btn bg-primary text-white py-2 px-4' onClick={OK}>Verify</button>
            </div>
        </div>
    )
}

export default NoMatch