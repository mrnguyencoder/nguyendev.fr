import React from 'react';


function Hero() {
  return (
    <section id="home" className="bg-gray-900 h-screen isolate">
      <div className="relative py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Création de Site Internet Sur Mesure
            </h1>
            <h2 className="mx-auto pt-5 max-w-2xl text-2xl font-bold tracking-tight text-white">
              À partir de 250€ pour un site web vitrine 
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Parce que chaque site est unique, il doit être personnalisé avec un design et des fonctionnalités particulières Soyez unique !
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
              href="#contact"
              className="rounded-md bg-[#F0DB4F] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-lg hover:scale-90 transition duration-500"
              >
                  Demande de Devis 
              </a>
              <a href="#faqs" className="rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-lg bg-[#61dbfb] hover:scale-90 transition duration-500">
                En savoir plus  <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>        
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient
            id="8d958450-c69f-4251-94bc-4e091a323369"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </section>
  )
}

export default Hero