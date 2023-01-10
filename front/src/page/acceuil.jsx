import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../component/navebar';

const Acceuil = () => {

    const [agendas, setAgendas] = useState([])

    useEffect(() => {
        async function getAgendaData() {
            await axios.get("https://api.openagenda.com/v2/agendas?key=79530381399144e2982925f542885ed0&size=20")
                .then((response) => {
                    setAgendas(response.data.agendas)
                })
        }
        getAgendaData()
    }, [])

    return (
        <section className='acceuil'>
            <Navbar />
            <div className='flex center'>
                <form className='acceuil-menu mg-top-2 mg-right-4 fixed left-10 pd-top-2'>
                    <div className='mg-left-8'>
                        <label htmlFor='category' className='mg-top-2'>Filters</label>
                        <br />
                        <select defaultValue={'DEFAULT'} >
                            <option value="DEFAULT" disabled>Category</option>
                            <option value="1">Mr</option>
                            <option value="2">Mrs</option>
                            <option value="3">Ms</option>
                            <option value="4">Miss</option>
                            <option value="5">Dr</option>
                        </select>
                        <br />
                        <input type="text" placeholder='Lieu' className='mg-top-6' />
                    </div>
                </form>
                <ul className='mg-top-2 pd-right-2 relative left-10'>
                    {agendas.map((agenda, index) => {
                        return <li key={index} className='flex center'>
                            <img src={agenda.image} alt="agenda" />
                            <div className='agenda-info'>
                                <h1>
                                    {agenda.title}
                                </h1>
                                <p>{agenda.description}</p>
                            </div>
                            <div className='container-btn-savoir-plus'>
                                <button className='relative bottom-0 btn-savoir-plus'>en savoir +</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Acceuil;