import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

function FAQs() {
    const faqs = [
        {
          question: `Pourquoi devriez-vous me choisir?`,
          answer:
            `Merci de l'intérêt que vous portez à moi parmi d'innombrables autres programmeurs, je viens de commencer avec une année d'expérience mais je suis convaincu que mes services sont excellents, notamment :meilleur prix pour la qualité correspondante, Dédié à servir parce que je comprends que vous avez besoin d'un site Web avec votre propre style `,
        },
        {
          question: `Prix ​​le plus bas pour 1 site Web ?`,
          answer:
            `À partir de 150€ pour CV étudiant, de 250€ pour le restaurant n'a qu'une seule page de menu. À partir de 450€ pour un site web vitrine personel ou entreprise. Et à partir de 850€ pour un site Blogueurs`,
        },
        {
          question: `Mais pourquoi le prix est-il si bon ?`,
          answer:
            `Mon auto-entrepreneur vient de démarrer, alors profitez-en.`,
        },
        {
          question: `Quel programme je utilise pour programmer ?`,
          answer:
            `Je code depuis le début avec React JS, Vite, Next JS...Et Hébergement Business avec Hostinger`,
        },
        {
          question: `Combien de temps faut-il pour avoir un site web ?`,
          answer:
            `Selon le projet dont vous avez besoin de plus ou moins, si c'est simple, je le fais en 1 jour, mais si vous avez besoin de beaucoup de fonctionnalités et modifiez beaucoup de détails, cela peut prendre plus de temps, peut-être 3-4 semaines`,
        },
        {
          question: `Continuerez-vous à suivre le site après cela ?`,
          answer:
            `Bien sûr oui, je vous accompagne à vie, vous avez besoin de modifier, de mettre à niveau ou d'ajouter des fonctionnalités, je peux m'adapter à tous`,
        },
        {
          question: `Comment me contacter ?`,
          answer:
            `Je préfère rencontrer en Ile de France, mais je peux aussi travailler avec vous à distance par téléphone ou réseaux sociaux. Je m'adapte à vos besoins. `,
        },
        
      ]
  return (
    <section id="faqs" className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-white/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Questions fréquemment posées</h2>
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