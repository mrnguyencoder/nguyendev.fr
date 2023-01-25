import React from 'react'

function Hero() {
  return (
    <section>
        <div className="p-6 text-green-50 bg-emerald-800">
            <h1 className="text-green-500 text-3xl">Nguyen Dev: Créer un site web n'a jamais été aussi facile</h1>
            <div className="md:flex">
                <div className="max-w-xs p-4">
                    <h2 className="text-xl">Site internet sur mesure vitrine</h2>
                    <p className="pt-3">Tout comme les vêtements, tu ne veux personne comme toi</p>
                    <p className="">Garantie votre site est unique</p>
                </div>
                <div className="max-w-xs p-4">
                    <h2 className="text-xl">Rapide, Sécurisé et Facile</h2>
                    <p className="pt-3">un jour de A-Z si vous avez deja votre idea</p>
                    <p className="">Utilisation des dernières technologies de sécurité</p>
                    <p className="">Dites-moi simplement vos idées et je vous aiderai à les mettre en œuvre</p>
                </div>
                <div className="max-w-xs p-4">
                    <h2 className="text-xl">À partir de 500 €</h2>
                    <p className="pt-3">Oui,Je ne plaisante pas, essayez-moi </p>
                    <p className="">Inclus: domain, code, logo, design, code barre...</p>
                    <p className="">La meilleure qualité avec le prix que vous pouvez payer</p>
                </div>
            </div>
        </div>

        <div className="">
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default Hero