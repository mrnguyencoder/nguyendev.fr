import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

function FAQs() {
    const faqs = [
        {
          question: `Pourquoi choisir mes services pour votre Projet de Design et Développement de Site Web ?`,
          answer:
            `Merci de prendre en considération mes services parmi les nombreuses options de design et développement de site web. Bien que je sois un programmeur relativement nouveau avec un an d'expérience, je suis confiant que mes services sont de première qualité et offrent le meilleur rapport qualité-prix pour votre investissement. Je comprends l'importance d'avoir un site web qui reflète votre style unique et votre personnalité, et je suis dédié à fournir une solution sur mesure qui répond à vos besoins spécifiques et dépasse vos attentes. `,
        },
        {
          question: `Mon site Web sera-t-il adapté aux mobiles et adapté aux différentes tailles d'écran ?`,
          answer:
            `Oui, votre site web sera entièrement compatible avec les appareils mobiles et optimisé pour différentes tailles d'écran. Je comprends l'importance d'avoir un site web accessible et facile à utiliser sur tous les appareils, et je considère cela comme une priorité pour garantir que toutes mes créations soient réactives et conviviales, quel que soit l'appareil. Vous pouvez être sûr qu'il n'y aura aucun coût supplémentaire ou frais cachés pour l'optimisation mobile.`,
        },
        {
          question: `Combien de temps prend habituellement le développement d'un site web ?`,
          answer:
            `Le délai pour le développement d'un site web peut varier en fonction de la complexité et de la portée du projet. Pour des projets simples, je peux généralement terminer le processus de développement en un jour. Cependant, pour des projets plus complexes avec un grand nombre de fonctionnalités et de exigences de personnalisation, cela peut prendre entre 3 et 4 semaines pour être achevé. Je travaillerai avec vous pour établir un calendrier qui répond à vos besoins et attentes, et je vous tiendrai informé de tout changement ou mise à jour tout au long du processus.`,
        },
        {
          question: `Comment abordez-vous la conception et le développement de sites web ?`,
          answer:
            `En tant que programmeur, je ne suis pas spécialisé dans la conception, cependant, mon service inclut des options de conception si vous n'avez pas déjà un design en place. J'utilise des outils tels que Canva pour créer des logos et des interfaces utilisateur.`,
        },
        {
          question: `Quelle est votre structure de tarification pour les services de développement web ?`,
          answer:
            `Les prix commencent à partir de: 150€ pour un site CV étudiant, 250€ pour un site de menu de restaurant simple, 450€ pour un site de présentation et 850€ pour un site de blog en région Île-de-France.`,
        },
        {
          question: `Que rend mes prix si compétitifs ?`,
          answer:
            `Je comprends que le coût est un facteur important dans la construction d'un site web, c'est pourquoi je m'efforce d'offrir des prix compétitifs pour des services de qualité supérieure. En tant que nouvel entrepreneur, je suis en mesure d'offrir des solutions abordables pour vos besoins en matière de conception et développement de site web, sans sacrifier la qualité ou la fonctionnalité. En choisissant de travailler avec moi, vous bénéficiez d'un excellent rapport qualité-prix, alors n'hésitez pas à profiter de mes tarifs compétitifs.`,
        },
        {
          question: `Quels sont les langages de programmation et les outils que vous utilisez pour le développement de sites web ?`,
          answer:
            `J'utilise une variété de technologies et d'outils modernes pour garantir que votre site web soit rapide, réactif et facile à utiliser. Mes langages de programmation principaux incluent React JS et MERN, tandis que j'utilise également Vite, Next JS et Tailwind CSS pour garantir une expérience utilisateur sans faille. Avec ces outils, je peux construire des sites web de haute qualité et efficaces qui répondent à vos besoins et exigences spécifiques.`,
        },
        {
          question: `Pouvez-vous m'aider avec l'hébergement de site Web et l'enregistrement de domaine ?`,
          answer:
            `Oui, je peux vous aider avec l'hébergement de site web et l'enregistrement de domaine. Je propose une inscription de domaine gratuite pour un an avec chaque projet de développement de site web, après quoi vous pouvez renouveler le domaine au tarif du marché. J'utilise l'hébergement d'entreprise Hostinger, vous pouvez donc facilement vérifier le coût de renouvellement de domaine avec eux. Faites-moi savoir s'il y a autre chose que je peux vous aider à faire.`,
        },
        {
          question: `Pouvez-vous fournir des études de cas ou des exemples de sites Web que vous avez développés pour des entreprises ou des organisations similaires ?`,
          answer:
            `Bien sûr, je serais heureux de vous fournir des exemples de sites web que j'ai développés pour des entreprises et des organisations similaires. J'ai une gamme de modèles que j'ai créés pour différents secteurs, et je peux également personnaliser ces modèles pour répondre à vos besoins et préférences spécifiques. De plus, je suis toujours ravi d'entendre vos idées et votre vision pour votre site web, et je suis déterminé à vous aider à créer une présence en ligne unique et efficace pour votre entreprise.`,
        },
        {
          question: `Pouvez-vous concevoir et développer des fonctionnalités personnalisées pour mon site web, telles que des capacités de commerce électronique ou des formulaires personnalisés? `,
          answer:
            `Je me spécialise dans la conception et le développement de l'interface web et je peux fournir des solutions personnalisées qui répondent à vos besoins spécifiques. Cependant, je n'offre actuellement que l'intégration de blogs et non de fonctionnalités de commerce électronique. Si vous avez un design spécifique en tête pour votre site web, je serais heureux de travailler avec vous pour le concrétiser et de fournir une solution adaptée à vos exigences.`,
        },
        {
          question: `Pouvez-vous fournir des études de cas ou des exemples de sites Web que vous avez développés pour des entreprises ou des organisations similaires ?`,
          answer:
            `Oui, je serais heureux de vous fournir des exemples de sites web que j'ai développés pour des entreprises et des organisations similaires. J'ai une gamme de modèles que j'ai créés pour différents secteurs, et je peux également personnaliser ces modèles pour répondre à vos besoins et préférences spécifiques. De plus, je suis toujours ravi d'entendre vos idées et votre vision pour votre site web, et je suis déterminé à vous aider à créer une présence en ligne unique et efficace pour votre entreprise.`,
        },
        {
          question: `Serai-je en mesure de faire des mises à jour et des modifications facilement sur mon site web à l'avenir ?`,
          answer:
            `Si vous souhaitez configurer votre propre compte d'hébergement, je suis heureux de fournir le code nécessaire. Dans ce cas, toute mise à jour ou modification devra être effectuée par vous, car je n'ai pas accès à votre compte. 
            Cependant, Oui, si votre domaine est dans mon compte, en tant que développeur, je propose la gestion de compte d'hébergement pour mes clients afin de simplifier le processus de mise à jour et de modification de leur site web. 
            Veuillez me faire savoir si vous avez besoin de plus de clarification sur cette question.`,
        },
        {
          question: `Comment allez-vous garantir la sécurité et la confidentialité de mon site Web et des données de mes clients ?`,
          answer:
            `Pour garantir la sécurité et la confidentialité de votre site Web et des données de vos clients, je suis les mesures de sécurité standards de l'industrie et j'utilise les dernières technologies disponibles. Je comprends l'importance de protéger les informations sensibles et je le prends très au sérieux. Je respecte toutes les lois et réglementations pertinentes concernant la vie privée et la protection des données, garantissant que votre site Web et les données de vos clients sont protégés à la pleine mesure du possible.`,
        },
        
      ]
  return (
    <section id="faqs" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Questions fréquemment posées</h2>
            <p className="text-lg tracking-tight text-slate-100 border-b py-3">Afin de vous donner une meilleure compréhension de mes services et de mes compétences, je vais répondre aux questions fréquemment posées suivantes :</p>
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