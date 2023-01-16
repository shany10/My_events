import React from 'react';
import logo from '../img/icons8-chevalier-100.png';
import photo_profil from '../img/photo-avatar-profil.png'
import Cookies from 'universal-cookie';
 
const Navbar = () => {
    const cookies = new Cookies()
    let url_profiler = '/register'
    if(cookies.get('user') !== undefined) {
       url_profiler = '/profil'
    }
    return (
        <header className='flex center mg-top-1'>
            <nav className='flex center items-center'>
                <a href="/" className='container-logo'>
                    <img src={logo} alt="logo" className='logo' />
                </a>
                <form action="" className='flex center'>
                    <input type="text" placeholder='search' className='mg-right-2' />
                    <button>Search</button>
                </form>
                <a href={url_profiler} className='container-icone-profil'>
                    <img src={photo_profil} alt="utilisateur icone" className='icone-utilasteur' />
                    <p className='mg-top-0 mg-bottom-0 txt-center mg'>profil</p>
                </a>
            </nav>
        </header>
    )
}

export default Navbar