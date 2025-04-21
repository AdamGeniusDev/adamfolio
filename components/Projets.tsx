'use client'
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Card2 from './Card2';
import { projects } from '@/constants';

const Projets = () => {
  const [activeTab,setActiveTab] = useState('tout');
  const [currentPage, setCurrentPage] = useState(1);
const [projectsPerPage, setProjectsPerPage] = useState(6);

const filteredProjects = activeTab === 'tout'
  ? projects
  : projects.filter(p => p.type.toLowerCase() === activeTab.toLowerCase());

const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);



const handleNextPage = () => {
  if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
};

const handlePrevPage = () => {
  if (currentPage > 1) setCurrentPage(prev => prev - 1);
};


React.useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setProjectsPerPage(3); // mobile
    } else {
      setProjectsPerPage(6); // desktop
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

React.useEffect(() => {
  setCurrentPage(1);
}, [activeTab]);

React.useEffect(() => {
  if (currentPage > totalPages) {
    setCurrentPage(1);
  }
}, [projectsPerPage, filteredProjects.length]);

  return (
   <section id='projets' className='w-full px-4 mt-10 flex justify-center items-center flex-col'>
    <div className="text-[70px] font-special font-extrabold text-light/15">PROJETS</div>
    <div className="text-vert font-special font-extrabold md:font-bold text-3xl propos"  style={{marginTop: '-40px'}}>PROJETS</div>
    <Tabs  value={activeTab} onValueChange={setActiveTab} className='flex items-center w-full px-5 mt-10'>
      <TabsList className='tabs p-2'>
      <TabsTrigger value="tout" className="flex-1 py-3 text-light-primary data-[state=active]:bg-vert data-[state=active]:text-light-primary">Tout</TabsTrigger>
      <TabsTrigger value="developpement" className=" flex-1 py-3 text-light-primary data-[state=active]:bg-vert data-[state=active]:text-light-primary">Developpement</TabsTrigger>
      <TabsTrigger value="design" className=" flex-1 py-3 text-light-primary data-[state=active]:bg-vert data-[state=active]:text-light-primary">Design</TabsTrigger>
      </TabsList>

      <TabsContent value='tout' className='w-full flex flex-wrap mt-10 gap-3'>
  {activeTab === 'tout' && currentProjects.map((project, index) => (
    <Card2 key={index} {...project} />
  ))}
</TabsContent>

<TabsContent value='developpement' className='w-full flex flex-wrap mt-10 gap-3'>
  {activeTab === 'developpement' && currentProjects.map((project, index) => (
    <Card2 key={index} {...project} />
  ))}
</TabsContent>

<TabsContent value='design' className='w-full flex flex-wrap mt-10 gap-3'>
  {activeTab === 'design' && currentProjects.map((project, index) => (
    <Card2 key={index} {...project} />
  ))}
</TabsContent>

<div className="w-full flex justify-center items-center gap-4 mt-6">
  <button
    onClick={handlePrevPage}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded bg-light text-dark transition-all duration-200 ${
      currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-vert hover:text-white'
    }`}
  >
    Précédent
  </button>

  <span className='text-light'>{currentPage} / {totalPages}</span>

  <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded bg-light text-dark transition-all duration-200 ${
      currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-vert hover:text-white'
    }`}
  >
    Suivant
  </button>
</div>
   </Tabs>
   </section>
  );
}

export default Projets;
