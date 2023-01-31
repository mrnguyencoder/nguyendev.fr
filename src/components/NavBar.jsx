import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import logo from '../assets/iconnguyencoder.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavBar() {
    const navigation = [
      { name: 'Accueil', href: '#accueil' },
      { name: 'Prestations', href: '#prestations' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Contact', href: '#contact' },
      ];
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  return (
    <div className="px-5 py-3 md:px-8 md:py-5 bg-slate-800">
    <nav className="flex items-center justify-between" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#accueil" className="-m-1.5 p-1.5">
          <span className="sr-only">Nguyen Dev</span>
          <img className="h-8" src={logo} alt="Nguyen Dev" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          aria-label="Open main menu"
          role="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-[#61dbfb] hover:text-[#F0DB4F]">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="https://wa.me/33782885224" 
            target="_blank" rel="noreferrer"
            className="text-sm font-semibold leading-6 text-[#25d366] hover:text-[#F0DB4F]">
        WhatsApp-moi <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 p-5 lg:hidden">
        <div className="flex items-center justify-between">
          <a href="#accueil" className="-m-1.5 p-1.5">
            <span className="sr-only">Nguyen Dev</span>
            <img className="h-8" src={logo} alt="Nguyen Dev" />
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="https://wa.me/33782885224"
                target="_blank" rel="noreferrer"
                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-[#25d366]"
              >
                WhatsApp-moi
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </div>
  )
}

export default NavBar