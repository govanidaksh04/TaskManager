import React, { useState } from 'react';
import './Login.css';
import Navb from '../Navb/Navb';
import email from '../Assets/email.png'
import password from '../Assets/password.png'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';

const auth = getAuth(app);

const Login = () => {
    const [email_id,setEmail] = useState('');
    const [password_id,setPassword] = useState('');
    const signin = () => {
        signInWithEmailAndPassword(auth,email_id,password_id).then(value => alert("Signed-In Successfully")).catch(err => alert(err));
    };
    return(
        <div>
            <Navb/>
            <div className="Header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email} alt="" />
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email_id}
                        type="email" 
                        placeholder="Email"
                    />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password_id}
                        type="password" 
                        placeholder="Password"
                    />
                </div>
            </div>
            <div className="forgot-password">Forgot Password ? <span>Click Here</span></div>
            <div className="forgot-password">Not Registered ? <Link className='underline' to='/Register'><span>Click Here</span></Link></div>
            <div className="submit-container">
                <div className="submit" onClick={signin}>Login</div>
            </div>
        </div>
    );
}

export default Login;