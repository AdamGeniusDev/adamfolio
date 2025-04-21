import Image from 'next/image'
import React from 'react'

const Apropos = () => {
  return (
    <section id="a-propos" className="flex justify-center items-center flex-col mt-20 w-full px-10 md:px-25">
        <div className="text-[70px] text-center sm:flex sm:justify-center font-special font-extrabold text-light/15">A PROPOS</div>
        <div className="text-vert font-special font-extrabold md:font-bold text-3xl propos"  style={{marginTop: '-40px'}}>A PROPOS</div>

        <div className=" mt-15 gap-8 w-full col">
            <div className="flex-shrink-0">
                <Image className="rounded-2xl " src='/Image/original2.jpg' alt="ma photo" width={380} height={380} />
            </div>
            <div className='mt-5 flex-1'>
                <p className="font-special font-bold text-vert text-3xl text-center">QUI SUIS-JE</p>
                <p className="mt-5 text-light-primary flex-1 presentation text-center">
                Je suis <strong className='text-[18px] text-white font-bold text-center'>ADAM Ridwane</strong>, développeur fullstack avec 3 ans d'expérience professionnelle. Avec cette expertise avisée, je m'engage à vous accompagner dans la réussite de vos projets numériques.<br/> Mon objectif est de créer pour chaque client une présence en ligne sur mesure, à la fois unique et impactante, grâce à des solutions web innovantes et un référencement SEO optimisé pour maximiser votre visibilité.<br/> Je combine créativité, expertise technique et stratégie digitale pour concevoir et optimiser des sites web qui captivent les visiteurs et renforcent votre marque.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Apropos
