import React, { useState } from 'react';
import Navbar from '../component/navebar';
import axios from 'axios';

const Register = () => {

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
        confirm: ""
    })

    const [message, setMessage] = useState({
        email: "",
        password: "",
        confirm: ""
    })

    const regex_email = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/
    const regex_password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    const seteur = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const sendData = (e) => {
        e.preventDefault()
        let problem = false
        console.log(user);
        if (user.email.match(regex_email) === null) {
            setMessage(previousState => {
                return { ...previousState, email: "Mail invalide" }
              })
            problem = true
        }

        if (user.password.match(regex_password) === null) {
            setMessage(previousState => {
                return { ...previousState, password: "Au moin 8 caractère requise" }
              })
            problem = true
        }

        if (user.password !== user.confirm) {
            setMessage(previousState => {
                return { ...previousState, confirm: "Mot de passe non identique" }
              })
            problem = true
        }

        if (problem === true) {
            return
        }

        const options = {
            // url: 'http://localhost:8000/register',
            url: 'http://127.0.0.1:8000/register',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                email: user.email,
                password: user.password,
                username: user.username
            }
        };
        axios(options)
            .then(response => {
                console.log(response.status);
            });

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
                    <div>
                        <input onChange={(e) => seteur(e)} type="mail" name='email' placeholder='email...' className='fts-1-5 pd-left-2 pd-top-1 pd-bottom-1' required />
                        {message.email !== '' ? (
                            <div className='flex center'>
                                <p className='message-input mg-bottom-0 mg-top-1 fts-1 bold'>
                                    {message.email}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="flex center mg-top-2">
                    <div className="register-label-container">
                        <label htmlFor="username" className='fts-1-8'>username :</label>
                    </div>
                    <div>
                        <input onChange={(e) => seteur(e)} type="text" name='username' placeholder='username...' className='fts-1-5 pd-left-2 pd-top-1 pd-bottom-1' required />
                    </div>
                </div>
                <div className="flex center mg-top-2">
                    <div className='register-label-container'>
                        <label htmlFor="password" className='fts-1-8'>password :</label>
                    </div>
                    <div>
                        <input onChange={(e) => seteur(e)} type="password" name="password" placeholder='password...' className='fts-1-5 pd-left-2 pd-top-1 pd-bottom-1' required />
                        {message.password !== '' ? (
                            <div className='flex center'>
                                <p className='message-input mg-bottom-0 mg-top-1 fts-1 bold'>
                                    {message.password}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="flex center mg-top-2">
                    <div className='register-label-container'>
                        <label htmlFor="confirm" className='fts-1-8'>confirm:</label>
                    </div>
                    <div>
                        <input onChange={(e) => seteur(e)} type="password" name='confirm' placeholder='confirm password...' className='fts-1-5 pd-left-2' required />
                        {message.confirm !== '' ? (
                            <div className='flex center'>
                                <p className='message-input mg-bottom-0 mg-top-1 fts-1 bold'>
                                    {message.confirm}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="flex center mg-top-6">
                    <button type='submit' className='fts-2 pd-left-1 pd-right-1 '>register</button>
                </div>
            </form>
        </section>
    )
}

export default Register