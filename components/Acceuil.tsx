import React from 'react'
import { Button } from './ui/button'

const Acceuil = () => {
  return (
    <section id='acceuil' className="px-8 mt-10 ">
        <div className=" flex flex-col justify-center items-center border-4 rounded-2xl mx-15 py-15 border-light">
            <p className='text font-special brightness-100'>Hi, I'm ADAM</p>
            <p className="text-white font-medium font-special uppercase text-[20px]">Developpeur fullstack,  designer,  funnel builder</p>\
            <Button className=" bg-blue font-semibold rounded-4xl mt-3 p-7 text-md button">Me contacter</Button>
        </div>
    </section>
  )
}

export default Acceuil
