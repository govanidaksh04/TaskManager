import React,{ useState } from 'react';
import './Register.css';
import Navb from '../Navb/Navb';
import email from '../Assets/email.png'
import person from '../Assets/person.png'
import password from '../Assets/password.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth(app);
const Register = () => {
    const [email_id, setEmail] = useState("");
    const [password_id, setPassword] = useState("");
    const handleRegister = async (auth) => {
        try {
          await createUserWithEmailAndPassword(auth, email_id, password_id);
          alert('Registered Successfully');
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            alert('Email is already registered');
          } else {
            alert('An error occurred while registering');
          }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        handleRegister(auth);
    };
    // const callFunc = () => {
    //     handleRegister(email_id,password_id);
    // }
    // const signupUser = () => {
    //     createUserWithEmailAndPassword(auth, email_id, password_id).then((value) => alert('Registered Successfully'));
    // };
    return(
        <div>
            <Navb/>
            <div className="Header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={person} alt="" />
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="input">
                        <img src={email} alt="" />
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email_id} placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password_id} placeholder="Password"/>
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Register;