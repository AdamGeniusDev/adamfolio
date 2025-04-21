import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card';
import Image from 'next/image';

interface Props {
    type: 'Developpement'| 'Design';
    titre: string;
    image: string;
    description: string;
    outils: string;
    lien?: string | null;
}
const Card2 = ({type,titre,image,description,outils,lien}: Props) => {

  return (
    <>
     <Card className=" max-w-full w-full md:w-[32%] p-3 border-2 border-vert background">
  <CardTitle className="font-special sm:text-2xl md:text-3xl text-vert mt-5 text-center">
    {type}
  </CardTitle>

  <CardContent className="flex flex-col items-center gap-5 w-full p-3">
    {/* Image + Titre */}
    <div className="flex flex-col items-center gap-2">
      <Image
        src={image}
        alt="image"
        width={300}
        height={80}
        className="object-contain rounded-md"
      />
      {type === 'Developpement' && (
        <p className="max-w-full font-special text-xl font-bold text-light-primary">
          {titre}
        </p>
      )}
    </div>

    {/* Outils */}
    <div className="flex flex-row gap-2 items-center">
      <p className="font-special font-bold text-light-primary">Outils :</p>
      <p className="text-vert font-semibold">{outils}</p>
    </div>
   {/* acces */}
    {type==='Developpement'&& (<div className="w-full flex flex-col gap-2 items-center">
      <p className="font-special font-bold text-light-primary">Acces</p>
      {lien && (<a href={lien} className="text-vert font-semibold text-center cursor-pointer surlign max-w-full break-words">{lien}</a>)}
    </div>)}
    {type==='Design'&&(<p className="font-special text-xl font-bold text-light-primary">
          {titre}
        </p>) }
  </CardContent>
</Card>

    </>
  )
}

export default Card2
