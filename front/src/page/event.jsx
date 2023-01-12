import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../component/navebar';
import calander from '../img/icons8-calander-64.png';
import lieux from '../img/icons8-épingle-2-50.png';
import telephone from '../img/icons8-téléphone-60.png';
import { useParams } from 'react-router-dom';

const Event = () => {
    const { uuid } = useParams();
    const [events, setEvents] = useState([])
    useEffect(() => {
        async function getAgendaData() {
            await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-openagenda&q=" + uuid + "&rows=10")
                .then((response) => {
                    setEvents(response.data.records)
                    console.log(response.data.records)
                })
        }
        getAgendaData()
    }, [uuid])

    return (
        <section className='event'>
            <Navbar />
            {events.map((event, index) => {
                let description = event.fields.longdescription_fr
                if (description !== undefined) {
                    let regex = /<\/?[ a-zA-Z0]{1,}\/?>/gm
                    description = description.replace(regex, "")
                }
                else {
                    description = event.fields.description_fr
                }
                return <div key={index} className='container-event'>
                    <h1 className='mg-top-1'>{event.fields.title_fr}</h1>
                    <div className='flex'>
                        <img src={event.fields.image} alt="event" className='event-image mg-left-2' />
                        <form className='mg-left-2'>
                            <h2 className='bold underline mg-top-0 mg-bottom-0'>{event.fields.daterange_fr}</h2>
                            <div className='flex items-center mg-top-2'>
                                <span className='bold'>date</span>
                                <input type="date" className='mg-left-2 inpute-calander' />
                                <img src={calander} alt="calander" className='icone-calander mg-left-2' />
                            </div>
                            <div className="flex mg-top-2">
                                <span className='bold'>Lieux :</span><span>{event.fields.location_address}</span>
                                <img src={lieux} alt="icone-lieux" className='icone-lieux mg-left-2' />
                            </div>
                            {event.fields.location_access_fr === undefined ? null : (
                                <div className="flex mg-top-4">
                                    <span className='bold'>Comment s'y rendre :</span><span>{event.fields.location_access_fr}</span>
                                </div>
                            )}
                            <div className='flex items-center mg-top-4'>
                                <p className='mg-bottom-0 mg-top-0'>{event.fields.location_phone}</p>
                                <img src={telephone} alt="" className='icone-telephone mg-left-2' />
                            </div>
                            <button type='submit' className='mg-top-4'>Organiser une sortie</button>
                        </form>
                    </div>
                    <h2 className='mg-left-2 bold underline'>Description</h2>
                    <p className='mg-left-2 mg-top-0'>{description}</p>
                </div>
            })}
        </section>
    )
}

export default Event


