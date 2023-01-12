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
                        <span>pseudo</span>
                        <br />
                        <br />
                        <span className='bold italic underline'>Présentation</span>
                        <p className='profil-presentation'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quae quod id assumenda nesciunt nobis laudantium, quibusdam expedita, vel deserunt dolore facere quos sit accusamus molestias quo ipsa magnam. Veniam.</p>
                    </div>
                </div>
                <div>
                    <div className='mg-left-2'>
                        coucou
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil