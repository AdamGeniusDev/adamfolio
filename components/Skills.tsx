import React from 'react'
import { Card } from './ui/card';
import Image from 'next/image';

const Skills = () => {
  return (
    <section id='skills' className='w-full px-4 sm:px-8 md:px-12 mt-10'>
  <div className='flex justify-center items-center flex-col mb-14'>
    <div className="text-[40px] sm:text-[60px] md:text-[70px] font-special font-extrabold text-light/15">SKILLS</div>
    <div className="text-vert font-special font-extrabold md:font-bold text-2xl sm:text-3xl mt-[-25px] sm:mt-[-35px] propos">SKILLS</div>
  </div>

  <div className="flex flex-col lg:flex-row gap-8">
    {/* Dev Card */}
    <Card className="p-6 sm:p-10 bg-light-dark w-[90%] mx-auto border-b-4 sm:px-15 border-vert card-bg">
      <div className="flex flex-col items-center">
        <p className="font-special font-semibold text-2xl sm:text-3xl mb-3 text-vert">Développement</p>
        <div className="text-white text-center">
          <p className="font-semibold">Création de site web sur mesure</p>
          <p className='mt-3 text-light-primary text-sm sm:text-base'>
            Je développe des sites sur mesure en combinant code (HTML, CSS, JavaScript, PHP) et CMS comme Wix ou WordPress. Qu'il s'agisse d'un site vitrine, d'une landing page ou d'une interface plus complexe, je conçois des solutions modernes, responsives et orientées performance.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        <Image src='/Image/html.png' alt='html' width={40} height={40} />
        <Image src='/Image/css.png' alt='css' width={40} height={40} />
        <Image src='/Image/javascript.png' alt='javascript' width={40} height={40} />
        <Image src='/Image/php.png' alt='php' width={35} height={35} />
        <Image src='/Image/nextjs.png' alt='nextjs' width={50} height={50} />
        <Image src='/Image/wordpress.png' alt='wordpress' width={40} height={40} />
        <Image src='/Image/wix.png' alt='wix' width={40} height={40} />
        <Image src='/Image/react.png' alt='react' width={60} height={60} />
      </div>
    </Card>

    {/* Design Card */}
    <Card className="p-6 sm:p-10 bg-light-dark w-[90%] mx-auto border-b-4 border-vert card-gb">
      <div className="flex flex-col items-center">
        <p className="font-special font-semibold text-2xl sm:text-3xl mb-3 text-vert">Design</p>
        <div className="text-white text-center">
          <p className='font-semibold'>Design Graphique</p>
          <p className='mt-3 text-light-primary text-sm sm:text-base'>
            Je conçois des visuels percutants et cohérents avec l'identité de chaque marque : logos, affiches, flyers, visuels réseaux sociaux et plus encore. Chaque création vise à marquer les esprits et à transmettre un message clair.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
        <Image src='/Image/photoshop2.png' alt='photoshop' width={90} height={85} />
        <Image src='/Image/illustrator.png' alt='illustrator' width={80} height={80} />
      </div>
    </Card>
  </div>
</section>

  )
}

export default Skills;
