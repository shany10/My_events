import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Acceuil = () => {

    const [agendas, setAgendas] = useState([])

    useEffect(() => {
        async function getAgendaData() {
            await axios.get("https://api.openagenda.com/v2/agendas?key=79530381399144e2982925f542885ed0&size=20")
                .then((response) => {
                    setAgendas(response.data.agendas)
                    console.log(response.data.agendas)
                })
        }
        getAgendaData()
    }, [])

    return (
        <section className='acceuil'>
            <h1>coucou</h1>
            <ul>
                {agendas.map((agenda, index) => {
                    return <li key={index} className='flex center'>
                        <img src={agenda.image} alt="agenda" />
                        <div className='agenda-info'>
                            <h1>
                                {agenda.title}
                            </h1>
                            <p>{agenda.description}</p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Acceuil;