import React from 'react';
import working from '../assets/working.jpg'

function Prestations() {
    const prestations = [
        { id: 1, stat: `1, Restaurants`, emphasis: 'Menu QR Code pour Restaurants et Bars sur téléphone.', rest: `Je vais créer un site Web et un code-barre pour vous afin que les clients puissent accéder rapidement au menu et les services de votre restaurant` },
        { id: 2, stat: `2, Étudiants`, emphasis: 'Votre CV en ligne.', rest: `Dans le monde numérique d'aujourd'hui, avoir une présence en ligne est cruciale. Mettez en valeur vos compétences et vos réalisations avec un CV professionnel en ligne. Je peux vous aider à créer un site web qui communique efficacement votre profil et vous démarque de la concurrence. Démarquez-vous auprès des employeurs potentiels et laissez une impression durable avec un CV en ligne qui met en lumière vos forces.` },
        { id: 3, stat: '3, Sites web personnels', emphasis: 'Pour un usage personnel ou professionnel.', rest: `Un site web est indispensable pour les besoins personnels et professionnels. Si vous recherchez une solution abordable et professionnelle pour vous présenter ou votre entreprise à vos clients, ne cherchez plus. Je peux vous aider à créer un site web qui met en valeur votre personnalité unique ou votre marque, sans vous ruiner. N'laissez pas un budget limité vous freiner - contactez-moi dès aujourd'hui.` },
        { id: 4, stat: `4, Blogueurs`, emphasis: `Rédigez votre propre histoire à l'âge de la désinformation.`, rest: `Bloquer est un excellent moyen de s'exprimer, de partager vos idées et de vous connecter avec les autres. Dans un monde rempli de désinformation, écrire à la main aide à maintenir votre esprit actif et impliqué. Pourquoi ne pas créer votre propre blog et écrire sur ce qui vous intéresse? Je peux vous aider à créer un site web qui facilitera la publication de votre écriture, atteindra un public plus large et bâtira une communauté autour de votre passion.` },
      ]
  return (
    <section id="prestations" className="relative bg-gray-900">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
            <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src={working}
                alt="nguyen dev working"
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
            <h2 className="text-base font-semibold text-indigo-300 tracking-wider">Service axé sur quatre types de clients</h2>
            <p className="mt-3 text-3xl font-bold text-white">
            Pour mieux servir mes clients, je me spécialise dans la fourniture de solutions complètes aux quatre types de clients suivants:
            </p>
            <p className="mt-5 text-lg text-gray-300">
            Je propose une gamme complète de services, y compris la conception de logos, la conception de menus, la création de sites CV, l'enregistrement de domaines, le développement de sites web, l'optimisation pour les moteurs de recherche (SEO), la liste Google My Business et plus encore. Laissez-moi vous aider à répondre à vos besoins spécifiques et à atteindre vos objectifs.
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