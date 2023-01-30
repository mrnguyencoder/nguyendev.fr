import React from 'react';


function Hero() {
  return (
    <section className="bg-gray-900">
      <div className="">
      <div className="mx-auto ">
        <div className="relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
          Création de Site Internet Sur Mesure
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          À partir de 250€ pour un site web vitrine 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://wa.me/33782885224"
              className="rounded-md bg-[#25d366] px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              WhatsApp-moi
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-white">
              En savoir plus <span aria-hidden="true">→</span>
            </a>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient
                id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#61dbfb" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#F0DB4F] sm:text-4xl">
          Clients dans tous les domaines
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          Photographes, Restaurants, Écrivains, Étudiants, Blogueurs... 
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Le Responsive Web Design</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-[#61dbfb]">100%</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Service</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-[#61dbfb]">24/7</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Réponse</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-[#61dbfb]">1J</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero