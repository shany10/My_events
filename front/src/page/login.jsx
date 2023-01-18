import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../component/navebar';

const Login = () => {

    const [user, setUser] = useState({
        email: null,
        password: null
    })

    const [message, setMessage] = useState({
        email: "",
        password: "",
    })

    const regex = /^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)(\.[a-zA-Z]{2,5}){1,2}$/

    const seteur = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()

        if (user.email.match(regex) === null) {
            setMessage({ ...message, email: "Mail invalide" })
            return
        }

        const options = {
            url: 'http://localhost:8000/auth',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                email: user.email,
                password: user.password
            }
        };
        axios(options)
            .then(response => {
                console.log(response.status);
            });
    }

    return (
        <section className='login'>
            <Navbar />
            <form onSubmit={(e) => sendData(e)} action="" className='register-container-input pd-bottom-2'>
                <div className='flex center'>
                    <h1 className='fts-2-5 txt-center register-title'>LOGIN</h1>
                </div>
                <div className='flex center mg-top-2'>
                    <div className='register-label-container'>
                        <label htmlFor="email" className='fts-1-8'>email :</label>
                    </div>
                    <div>
                        <input onChange={(e) => seteur(e)} type="mail" name='email' placeholder='email...' className='fts-1-5 pd-left-2 pd-top-1 pd-bottom-1' required />
                        <div className='flex center'>
                            <p className='message-input mg-bottom-0 mg-top-1 fts-1 bold'>{message.email}</p>
                        </div>
                    </div>
                </div>
                <div className="flex center mg-top-2">
                    <div className='register-label-container'>
                        <label htmlFor="password" className='fts-1-8'>password :</label>
                    </div>
                    <div className="register-container-label">
                        <input onChange={(e) => seteur(e)} type="password" name="password" placeholder='password...' className='fts-1-5 pd-left-2 pd-top-1 pd-bottom-1' required />
                    </div>
                </div>
                <div className="flex center mg-top-4">
                    <button type='submit' className='fts-2 pd-left-2 pd-right-2 pd-top-1 pd-bottom-1 pointer'>Login</button>
                </div>
                <div className='flex center mg-top-2'>
                    <a href="/register" className='fts-1-5 underline cl-red'>register</a>
                </div>
            </form>
        </section>
    )
}

export default Login