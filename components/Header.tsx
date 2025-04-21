'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = ['acceuil', 'skills', 'a-propos', 'projets', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = (
    <>
      <li><Link href="/#acceuil" onClick={() => setIsOpen(false)} className={cn(activeSection === 'acceuil' ? 'link' : 'text-light')}>Accueil</Link></li>
      <li><Link href="/#skills" onClick={() => setIsOpen(false)} className={cn(activeSection === 'skills' ? 'link' : 'text-light')}>Skills</Link></li>
      <li><Link href="/#a-propos" onClick={() => setIsOpen(false)} className={cn(activeSection === 'a-propos' ? 'link' : 'text-light')}>A propos</Link></li>
      <li><Link href="/#projets" onClick={() => setIsOpen(false)} className={cn(activeSection === 'projets' ? 'link' : 'text-light')}>Projets</Link></li>
      <li><Link href="/#contact" onClick={() => setIsOpen(false)} className={cn(activeSection === 'contact' ? 'link' : 'text-light')}>Contacter</Link></li>
    </>
  );

  return (
    <div className='header pb-15 relative'>
      <header className='flex justify-between items-center py-6 pt-10 px-6 sm:px-16 head'>
        <div>
          <Image src='/Image/ar.svg' alt="logo" width={60} height={30} />
        </div>

        {/* Menu for desktop */}
        <nav className='hidden sm:flex flex-row items-center gap-5 z-10 relative'>
          <ul className='flex flex-row gap-5'>{navLinks}</ul>
          <Button className="bg-transparent border-2 cursor-pointer download">
            <a href="/Image/cv.pdf" download className='flex items-center justify-center'>
            Download CV <Image src='/Image/bas.png' alt='fleche' width={16} height={16} />
            </a>
          </Button>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className='sm:hidden'>
          <Menu className="text-white cursor-pointer" size={28} onClick={() => setIsOpen(true)} />
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div className={cn(
  'fixed top-0 left-0 w-[70%] h-full flou-3 z-1050 transform transition-transform duration-300 ease-in-out',
  isOpen ? 'translate-x-0' : '-translate-x-full'
)}>

        <div className='flex justify-between items-center p-5 border-b border-gray-700'>
          <Image src='/Image/ar.svg' alt="logo" width={50} height={30} />
          <X className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>
        <ul className='flex flex-col gap-6 p-6 text-white text-lg'>
          {navLinks}
        </ul>
        <div className="px-6 mt-4 border-2 border-white mx-6 rounded-2xl">
            <a href="/Image/cv.pdf" download className='flex items-center justify-center text-light-primary'>
            Download CV <Image src='/Image/bas.png' alt='fleche' width={16} height={16} />
            </a>
        </div>
      </div>

      {/* Section d’accueil */}
      <section id='acceuil' className="px-4 sm:px-5 mt-16 w-full">
        <div className="w-full mx-auto px-4 sm:px-5 flou flou-2 text-center">
          <Image src='/Image/avatar.png' alt="photo" width={150} height={150} />
          <p className="text font-special sm:text-[45px] md:text-4xl">Hi, I'm ADAM</p>
          <p className="text-light-primary font-medium font-special text-md sm:text-base md:text-lg mt-4 px-2 sm:px-10">
            <strong className="block mb-2">Développeur fullstack, designer, funnel builder</strong>
            Bienvenue dans mon univers digital. Je conçois des expériences complètes du code au design en passant par la stratégie. Fort de 3 années d'expérience, j'ai déjà accompagné plusieurs personnes dans la création de solutions performantes. Explore mes projets et voyons comment on peut travailler ensemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center items-center w-full">
            <Button className="bg-white button text-black font-medium px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
              <a href="/#contact">
              Me contacter
              </a>
            </Button>
            <Button className="bg-transparent download border font-medium px-6 py-3 text-sm sm:text-base w-full sm:w-auto flex items-center justify-center">
            <a href="/Image/cv.pdf" download className='flex items-center justify-center'>
            Download CV <Image src='/Image/bas.png' alt='fleche' width={16} height={16} />
            </a>
            </Button>
          </div>
          <div className="flex flex-row mt-8 gap-5 justify-center items-center">
            <a href="https://web.facebook.com/profile.php?id=61554747797706">
            <Image src='/Image/facebook.png' alt='facebook' width={40} height={40} className='cursor-pointer'/>
            </a>
            <a href="https://www.instagram.com/graphic.adam/">
            <Image src='/Image/instagram.png' alt='instagram' width={35} height={35} className='cursor-pointer'/>
            </a>     
            <a href="https://www.linkedin.com/in/ridwane-adam-b71255327/">
            <Image src='/Image/linkedin.png' alt='linkedin' width={40} height={40} className='cursor-pointer'/>
            </a> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
