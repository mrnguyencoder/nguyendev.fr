import React, { useState } from 'react';
import logo from '../assets/iconnguyencoder.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function NavBar() {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='bg-slate-800 w-full xl:max-w-[1280px] overflow-hidden
                    flex justify-between items-center'>
        <img src={logo} alt="" className='h-10 m-4' />

        <ul className="hidden sm:flex items-center space-x-4 text-green-50 pr-4">
            <li className=""><a href="">Accueil</a></li>
            <li className=""><a href="">Propos</a></li>
            <li className=""><a href="">Clients</a></li>
            <li className=""><a href="">Contact</a></li>
        </ul>

        <div className="sm:hidden flex justify-end items-center">
            <img src={toggle ? close : menu } alt="" 
                className="text-slate-50 p-4" 
                onClick={() => setToggle((prev)=> !prev)}/>
            <div className={`${!toggle ? "hidden" : "flex"}
                        absolute top-20 bg-gradient-to-r from-slate-50 to-slate-300
                        p-6 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="space-y-2">
                    <li className=""><a href="">Accueil</a></li>
                    <li className=""><a href="">Propos</a></li>
                    <li className=""><a href="">Clients</a></li>
                    <li className=""><a href="">Contact</a></li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default NavBar