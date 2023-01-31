import React from 'react';

function Prestations() {
    const prestations = [
        { id: 1, stat: `1, Restaurants`, emphasis: 'Menu QR Code pour Restaurants et Bars sur téléphone.', rest: `Je vais créer un site Web et un code-barre pour vous afin que les clients puissent accéder rapidement au menu et les services de votre restaurant` },
        { id: 2, stat: `2, Étudiants`, emphasis: 'Votre CV en ligne.', rest: `Le monde se tourne vers la technologie, mettez votre profil sur un site internet, je vais vous aider !` },
        { id: 3, stat: '3, Site Vitrine', emphasis: 'Personel ou entreprise.', rest: `Les gens demandent pourquoi vous n'avez pas de site Web à présenter aux clients, alors que vos fonds économiques sont limités ? Ne vous inquiétez pas, contactez-moi!` },
        { id: 4, stat: `4, Blogueurs`, emphasis: `Soyez votre propre écrivain à l'ère de Fake-news.`, rest: `J'ai toujours cru qu'écrire à la main gardera votre esprit actif et développé, pourquoi ne pas créer un site Web pour écrire sur ce que vous voulez ?` },
      ]
  return (
    <section id="prestations" className="relative bg-gray-900">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
            <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
            />
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
            </div>
        </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-base font-semibold text-indigo-300 tracking-wider">Réalisez vos idées</h2>
            <p className="mt-3 text-3xl font-bold text-white">
            Afin de maximiser mon orientation site web produit, je me concentre actuellement uniquement sur les quatre clients suivants
            </p>
            <p className="mt-5 text-lg text-gray-300">
            Laissez-moi vous aider de A à Z: logo, menu, CV, domaine, site web, SEO, Fiche d'établissement Google...
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {prestations.map((item) => (
                <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
                </p>
            ))}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Prestations