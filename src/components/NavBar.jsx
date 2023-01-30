import React, { useState } from 'react';
import logo from '../assets/iconnguyencoder.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
// import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/outline';

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

        <div className="sm:hidden flex justify-end items-center z-10">
            <img src={toggle ? close 
                            : menu } 
                alt="" 
                className="p-4" 
                onClick={() => setToggle((prev)=> !prev)}/>
            <div className={`${!toggle ? "hidden" : "flex"}
                        absolute top-20 bg-slate-800
                        p-6 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg sidebar`}>
                <ul className="space-y-2 text-[#61dbfb] text-xl tracking-wide ">
                    <li className="hover:text-[#F0DB4F]"><a href="">Accueil</a></li>
                    <li className="hover:text-[#F0DB4F]"><a href="">Propos</a></li>
                    <li className="hover:text-[#F0DB4F]"><a href="">Clients</a></li>
                    <li className="hover:text-[#F0DB4F]"><a href="">Contact</a></li>
                </ul>

            </div>
        </div>
    </nav>
  )
}

export default NavBar