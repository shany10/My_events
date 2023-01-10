import React from 'react'
import logo from '../img/icons8-chevalier-100.png'
import utilisateur from '../img/icons8-utilisateur-sexe-neutre-96.png'

const Navbar = () => {
    return (
        <header className='flex center mg-top-1'>
            <nav className='flex center items-center'>
                <img src={logo} alt="logo" className='logo mg-left-10'/>
                <form action="" className='flex center'>
                    <input type="text" placeholder='search' className='mg-right-2'/>
                    <button>Search</button>
                </form>
                <img src={utilisateur} alt="utilisateur icone" className='icone-utilasteur'/>
            </nav>
        </header>
    )
}

export default Navbar