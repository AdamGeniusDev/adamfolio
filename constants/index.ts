interface Project {
    type: 'Developpement' | 'Design';
    titre: string;
    image: string;
    description: string;
    outils: string;
    lien?: string | null;
  }

export const projects: Project[] =[
    {
        type: "Developpement",
        titre: "FindHome",
        image: '/Image/home.jpeg',
        description: "Findhome est une plateforme concue pour permettre aux utilisateurs de trouver leurs maison ideale(en location ou en vente) sans forcement passer par les methodes traditionnelles c'est a dire recourir aux demarcheurs et autres ",
        outils: 'PHP',
        lien: 'https://github.com/AdamGeniusDev/Findhome.git',
    },
    {
        type: "Developpement",
        titre: "University-library",
        image: '/Image/library.png',
        description: "Une plateforme de pret de livres cree au cours de mon apprentissage de nextsjs",
        outils: 'Nextjs',
        lien:'https://github.com/AdamGeniusDev/university-library-jsm.git',
    },
    {
        type: "Developpement",
        titre: "Novacare clinic",
        image: '/Image/novacare.png',
        description: "Une plateforme de soins medicaux",
        outils: 'Wordpress',
        lien:'https://novacare-clinic.ct.ws/?i=1',
    },{
        type: "Developpement",
        titre: "Kevin's education",
        image: '/Image/education.png',
        description: "Une plateforme d'education canine",
        outils: 'Wordpress',
        lien: 'https://education-canine.wuaze.com/',
    },
    {
        type: "Developpement",
        titre: "Steve's shop",
        image: '/Image/shop.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Wordpress',
        lien: 'http://steve-shop.wuaze.com/',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/adam.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/business.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/arsaaf.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/mah.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/graphisme.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/mophoto.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/moshop.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/moshopi.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },

    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/shopify.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/bakers.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Logo",
        image: '/Image/football.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Illustrator',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/mtunnel.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
    {
        type: "Design",
        titre: "Affiche",
        image: '/Image/affiche/mwordpress.png',
        description: "Une boutique de vente de montre smartwatch (montre connectee)",
        outils: 'Photoshop',
    },
];