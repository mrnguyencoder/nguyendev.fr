import React from 'react';


function Hero() {
  return (
    <section id="home" className="bg-gray-900">
      <div className="isolate bg-gray-900">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)"
              fillOpacity=".2"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="f4773080-2a16-4ab4-9fd7-579fec69a4f7"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main>
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
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
              >
                <path
                  fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)"
                  fillOpacity=".2"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ee0717bf-3e43-49df-b1bd-de36422ed3d3"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Hero