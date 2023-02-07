import React from 'react';


function Hero() {
  return (
    <section id="accueil" className="bg-gray-900 min-h-screen isolate ">
      <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Développement de sites web personnalisé par un développeur solo
            </h1>
            <h2 className="mx-auto pt-5 max-w-2xl text-2xl font-bold tracking-tight text-white">
            En tant que développeur web solo, je propose des services de développement de sites web personnalisés qui peuvent prendre votre projet de la conception à la finalisation. Les prix débutent à 150€ pour un site CV étudiant, 250€ pour un site de menu de restaurant simple ou 450€ pour un site de présentation de la région Ile-de-France.
            </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Chaque site est unique, et je combine mon expertise technique à une vision créative pour garantir que votre site soit fonctionnel et visuellement attrayant.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-[#F0DB4F] px-3.5 py-1.5 text-base ms:text-ms font-semibold leading-7 text-white shadow-lg hover:scale-90 transition duration-500"
              >
                  Demande de Devis 
            </a>
            <a href="#faqs" className="rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-lg bg-[#61dbfb] hover:scale-90 transition duration-500">
                En savoir plus  <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#61dbfb" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    </section>
  )
}

export default Hero