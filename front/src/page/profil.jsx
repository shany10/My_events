import React from 'react';
import Navbar from '../component/navebar';
import photo_profil from '../img/photo-avatar-profil.png';

const Profil = () => {
    return (
        <section className="profil">
            <Navbar/>
            <div className='container-profil'>
                <h1 className='mg-left-2'>titre event</h1>
                <div className='flex'>
                    <img src={photo_profil} alt="avatar" className='photo-profil mg-left-2'/>
                    <div className='mg-left-4'>
                        <br />
                        <span className='fts-1-8'>pseudo</span>
                        <br />
                        <br />
                        <span className='bold italic underline fts-1-8'>Présentation</span>
                        <p className='profil-presentation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae quod id assumenda nesciunt nobis laudantium, quibusdam expedita, vel deserunt dolore facere quos sit accusamus molestias quo ipsa magnam. Veniam.</p>
                    </div>
                </div>
                <div className='mg-top-4'>
                    <div className='sortie flex'>
                        <img src={photo_profil} alt="event" className='img-sortie mg-top-1 mg-left-1 mg-bottom-1' />
                        <div className='mg-left-4 profil-sortie-container-info'>
                            <br />
                            <span className='fts-1-5 mg-left-6'>nom de l'evenement</span>
                            <br />
                            <br />
                            <span className='fts-1-2 mg-left-6'>nombre de participants: X</span>
                        </div> 
                        <div className='profil-sorti-container-btn flex center items-center'>
                        <button className='fts-1-5 pointer'>En savoir +</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil