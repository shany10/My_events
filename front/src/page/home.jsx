import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../component/navebar';
import Pagination from '../component/pagination';

const Home = () => {
    const [events, setEvents] = useState([])
    const [start, setStart] = useState(0)
    // const numberPage = Math.ceil(10000 /20)

    const starteur = (index) => {
        if(index < 0) {
            index = 0
        }
        setStart(index)
    }

    useEffect(() => {
        async function getAgendaData() {
            await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=&rows=20&start=" + start)
                .then((response) => {
                    setEvents(response.data.records)
                    // console.log(response.data)

                })
        }
        getAgendaData()
    }, [start])

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
                    <div className='mg-top-2'>
                        <Pagination starteur={starteur} start={start}/>
                    </div>
                    {events.map((event, index) => {
                        return <li key={index} className='flex center'>
                            <img src={event.fields.thumbnail} alt="agenda" />
                            <div className='agenda-info'>
                                <h1>
                                    {event.fields.title_fr}
                                </h1>
                                <p>{event.fields.description_fr}</p>
                            </div>
                            <div className='container-btn-savoir-plus'>
                                <button className='relative bottom-0 btn-savoir-plus'>
                                    <a href={"/event/" + event.fields.uid} className='cl-blue'>
                                        en savoir +
                                    </a>
                                </button>
                            </div>
                        </li>
                    })}
                    <div className="mg-bottom-2">
                        {/* <Pagination starteur={starteur} /> */}
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Home;