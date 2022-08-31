import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../Contexts/AuthProvider';

const Login = () => {
    const year = new Date().getFullYear();
    const { googleSignIn, users } = UserAuth();
    const [icon, setIcon] = useState(true)
    const [onShow, setOnShow] = useState('password');
    // const history = unstable_HistoryRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (users != null) {
            navigate('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users]);


    const show = () => {
        if (onShow === 'password') {
            setOnShow('text');
            setIcon(false);
        } else {
            setIcon(true);
            setOnShow('password');
        }
    }

    const Signing = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(use => {
                if (use) navigate("/");
            })
            .catch(error => {
                if (error) alert("The password is incorrect");
            })
    }

    const Register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(use => {
                if (use) navigate("/");
            })
            .catch((err) => {
                if (err) navigate("/");
            })
        // .catch(error => {
        //    if (error) alert("The password is incorrect");
        // });
    }

    return (
        <div>
            <div className='sheks'>
                <div className='left '>
                    <div className='niko pt-5 bg-white vh-100 d-flex align-items-center flex-column'>

                        <div className="login__container d-flex flex-column rounded-2 p-4">
                            <h5 className="fs-2 mb-4">Sign in</h5>
                            <form>
                                <label className='mb-1'>Email or mobile phone number</label>
                                <br />
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='mb-2 bg-white' />
                                <label className='mb-1'>Password</label>
                                <br />
                                <div className="d-flex justify-content-space">
                                    <input type={onShow} value={password} onChange={e => setPassword(e.target.value)} className='mb-2 bg-white' />
                                    {icon && <VisibilityIcon onClick={show} />}{!icon && <VisibilityOffIcon onClick={show} />}
                                </div>
                                <br />
                                <button type='submit' onClick={Signing} className='rounded-1 w-100 border mt-2'>Continue</button>
                            </form>
                            <h6 className='mt-3 cont'>By continuing, you agree to Amazon's <Link to="/" className='text-decoration-none'>Conditions of Use</Link> and <Link to="/" className='text-decoration-none'>Privacy Notice.</Link></h6>
                            <ul>
                                <li><Link to="/" className='text-decoration-none cont'>Need help?</Link></li>
                            </ul>
                        </div>
                        <div class="a-divider a-divider-break text-center pt-3 "><h5 className='d-inline-block bg-white'>New to Amazon?</h5></div>
                        <button className='border rounded-1 px-5 mt-2 registar__btn' onClick={Register}>Create your Amazon account</button>
                    </div>
                </div>
                <div className='right niko bg-white vh-100 d-flex supa-strike align-items-center flex-column pe-4'>

                    <GoogleButton className="px-2 bg-light text-black" onClick={handleGoogleSignIn} />
                </div>

            </div>
            <div>
                <hr />
                <ul className='titanium d-flex'>
                    <li>
                        <Link to='/' className='text-decoration-none mx-3 supreme'>Conditions of Use </Link>
                    </li>
                    <li>
                        <Link to='/' className='text-decoration-none mx-3 supreme'>Privacy Notice </Link>
                    </li>
                    <li>
                        <Link to='/' className='text-decoration-none mx-3 supreme'>Help</Link>
                    </li>
                </ul>
                <p className="text-center fse">©1996-{year}, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>

    )
}

export default Login;