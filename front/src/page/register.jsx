import React, { useState } from 'react';
import Navbar from '../component/navebar';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        email: null,
        pseudo: null,
        password: null,
        confirm: null
    })

    const seteur = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()
        if (user.password !== null && user.password === user.confirm) {
            const options = {
                url: 'http://localhost:8000/register',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    email: user.email,
                    password: user.password,
                    pseudo: user.pseudo
                }
            };
            axios(options)
                .then(response => {
                    console.log(response.status);
                });
        }
    }

    return (
        <section className="register">
            <Navbar />
            <form onSubmit={(e) => sendData(e)} action="" className='register-container-input pd-bottom-2'>
                <div className='flex center'>
                    <h1 className='fts-2 txt-center register-title'>REGISTER</h1>
                </div>
                <div className='flex center'>
                    <div className='register-label-container'>
                        <label htmlFor="email" className='fts-1-8'>email :</label>
                    </div>
                    <input onChange={(e) => seteur(e)} type="mail" name='email' placeholder='email...' className='fts-1-5 pd-left-2' />
                </div>
                <div className="flex center mg-top-2">
                    <div className="register-label-container">
                        <label htmlFor="pseudo" className='fts-1-8'>pseudo :</label>
                    </div>
                    <input onChange={(e) => seteur(e)} type="text" name='pseudo' placeholder='pseudo...' className='fts-1-5 pd-left-2' />
                </div>
                <div className="flex center mg-top-2">
                    <div className='register-label-container'>
                        <label htmlFor="password" className='fts-1-8'>password :</label>
                    </div>
                    <input onChange={(e) => seteur(e)} type="password" name="password" placeholder='password...' className='fts-1-5 pd-left-2' />
                </div>
                <div className="flex center mg-top-2">
                    <div className='register-label-container'>
                        <label htmlFor="confirm" className='fts-1-8'>confirm:</label>
                    </div>
                    <input onChange={(e) => seteur(e)} type="password" name='confrim' placeholder='confirm password...' className='fts-1-5 pd-left-2' />
                </div>
                <div className="flex center mg-top-6">
                    <button type='submit' className='fts-2 pd-left-1 pd-right-1 '>register</button>
                </div>
            </form>
        </section>
    )
}

export default Register