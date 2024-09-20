// Home.js
import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Features from './Components/Features/Features';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";

// const auth = getAuth(app);

const App = () => {
    // const signupUser = () => {
    //     createUserWithEmailAndPassword(
    //         auth,
    //         "govanidaksh@gmail.com",
    //         "Daksh1234"
    //     ).then((value) => console.log(value));
    // };
    return(
        <BrowserRouter>
        {/* <div>
            <button onClick={signupUser}>Create user</button>
        </div> */}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/features' element={<Features/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;