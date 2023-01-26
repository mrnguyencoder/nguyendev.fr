import React, { useState } from 'react';
import logo from '../assets/iconnguyencoder.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function NavBar() {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='bg-slate-800 w-full xl:max-w-[1280px] overflow-hidden
                    flex justify-between items-center'>
        <img src={logo} alt="" className='h-10' />

        <ul className="hidden md:flex items-center space-x-4 text-green-50 pr-4">
            <li className=""><a href="">Accueil</a></li>
            <li className=""><a href="">Propos</a></li>
            <li className=""><a href="">Clients</a></li>
            <li className=""><a href="">Contact</a></li>
        </ul>

        <div className="md:hidden flex justify-end items-center">
            <img src={toggle ? close : menu } alt="" 
                className="text-slate-50 object-contain" 
                onClick={() => setToggle((prev)=> !prev)}/>
            <div className="">

            </div>
        </div>
    </nav>
  )
}

export default NavBar