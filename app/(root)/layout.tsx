import Acceuil from '@/components/Acceuil'
import Apropos from '@/components/Apropos'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Projets from '@/components/Projets'
import Skills from '@/components/Skills'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className="w-full h-full background">
    <Header />
    <Skills />
      <Apropos />
      <Projets />
      <Contact />
    </main>
  )
}

export default layout
