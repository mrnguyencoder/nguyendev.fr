import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

function FAQs() {
    const faqs = [
        {
          question: `Pourquoi Choisir Mes Services pour Votre Projet de Design et Développement de Site Web ?`,
          answer:
            `Merci de prendre en considération mes services parmi les nombreuses options de design et développement de site web. Bien que je sois un programmeur relativement nouveau avec un an d'expérience, je suis confiant que mes services sont de première qualité et offrent le meilleur rapport qualité-prix pour votre investissement. Je comprends l'importance d'avoir un site web qui reflète votre style unique et votre personnalité, et je suis dédié à fournir une solution sur mesure qui répond à vos besoins spécifiques et dépasse vos attentes. `,
        },
        {
          question: `Que rend mes prix si compétitifs ?`,
          answer:
            `Je comprends que le coût est un facteur important dans la construction d'un site web, c'est pourquoi je m'efforce d'offrir des prix compétitifs pour des services de qualité supérieure. En tant que nouvel entrepreneur, je suis en mesure d'offrir des solutions abordables pour vos besoins en matière de conception et développement de site web, sans sacrifier la qualité ou la fonctionnalité. En choisissant de travailler avec moi, vous bénéficiez d'un excellent rapport qualité-prix, alors n'hésitez pas à profiter de mes tarifs compétitifs.`,
        },
        {
          question: `Mais pourquoi le prix est-il si bon ?`,
          answer:
            `Mon auto-entrepreneur vient de démarrer, alors profitez-en.`,
        },
        {
          question: `"Quels sont les langages de programmation et les outils que vous utilisez pour le développement de sites web ?`,
          answer:
            `J'utilise une variété de technologies et d'outils modernes pour garantir que votre site web soit rapide, réactif et facile à utiliser. Mes langages de programmation principaux incluent React JS et MERN, tandis que j'utilise également Vite, Next JS et Tailwind CSS pour garantir une expérience utilisateur sans faille. Avec ces outils, je peux construire des sites web de haute qualité et efficaces qui répondent à vos besoins et exigences spécifiques.`,
        },
        {
          question: `Combien de temps prend habituellement le développement d'un site web ?`,
          answer:
            `Le délai pour le développement d'un site web peut varier en fonction de la complexité et de la portée du projet. Pour des projets simples, je peux généralement terminer le processus de développement en un jour. Cependant, pour des projets plus complexes avec un grand nombre de fonctionnalités et de exigences de personnalisation, cela peut prendre entre 3 et 4 semaines pour être achevé. Je travaillerai avec vous pour établir un calendrier qui répond à vos besoins et attentes, et je vous tiendrai informé de tout changement ou mise à jour tout au long du processus.`,
        },
        {
          question: `Pouvez-vous concevoir et développer des fonctionnalités personnalisées pour mon site web, telles que des capacités de commerce électronique ou des formulaires personnalisés? `,
          answer:
            `Je me spécialise dans la conception et le développement de l'interface web et je peux fournir des solutions personnalisées qui répondent à vos besoins spécifiques. Cependant, je n'offre actuellement que l'intégration de blogs et non de fonctionnalités de commerce électronique. Si vous avez un design spécifique en tête pour votre site web, je serais heureux de travailler avec vous pour le concrétiser et de fournir une solution adaptée à vos exigences.`,
        },
        {
          question: `Mon site Web sera-t-il adapté aux mobiles et adapté aux différentes tailles d'écran ?`,
          answer:
            `Oui, votre site web sera entièrement compatible avec les appareils mobiles et optimisé pour différentes tailles d'écran. Je comprends l'importance d'avoir un site web accessible et facile à utiliser sur tous les appareils, et je considère cela comme une priorité pour garantir que toutes mes créations soient réactives et conviviales, quel que soit l'appareil. Vous pouvez être sûr qu'il n'y aura aucun coût supplémentaire ou frais cachés pour l'optimisation mobile.`,
        },
        {
          question: `Pouvez-vous m'aider avec l'hébergement de site Web et l'enregistrement de domaine ?`,
          answer:
            `Oui, je peux vous aider avec l'hébergement de site web et l'enregistrement de domaine. Je propose une inscription de domaine gratuite pour un an avec chaque projet de développement de site web, après quoi vous pouvez renouveler le domaine au tarif du marché. J'utilise l'hébergement d'entreprise Hostinger, vous pouvez donc facilement vérifier le coût de renouvellement de domaine avec eux. Faites-moi savoir s'il y a autre chose que je peux vous aider à faire.`,
        },
        
      ]
  return (
    <section id="faqs" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Questions fréquemment posées</h2>
            <p className="text-lg tracking-tight text-slate-100">Afin de vous donner une meilleure compréhension de mes services et de mes compétences, je vais répondre aux questions fréquemment posées suivantes :</p>
            <dl className="mt-10 space-y-6 divide-y divide-white/10">
                {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                    <>
                        <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                            {open ? (
                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                            </span>
                        </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                ))}
            </dl>
            </div>
        </div>
    </section>
  )
}

export default FAQs