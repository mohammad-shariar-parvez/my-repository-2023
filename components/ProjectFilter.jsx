'use client';

import { projects } from '@/constants/projects';
import { useEffect } from 'react';

const ProjectFilter = ({ setFiltered, activeCategory, setActiveCategory }) => {
  useEffect(() => {
    // if (activeCategory === 'fullstack') {
    //   setFiltered(projects);
    //   return;
    // }

    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <>
      <div className='flex gap-5 my-10 justify-center '>
        <button
          className={
            activeCategory == 'fullstack'
              ? `py-1 px-3 outline outline-1 outline-gray-300
          bg-dark-blue text-white rounded-lg `
              : ` py-1 px-3 outline outline-1 outline-gray-300 rounded-lg`
          }
          onClick={() => setActiveCategory('fullstack')}
        >
          Full Stack
        </button>

        <button
          className={
            activeCategory == 'frontend'
              ? `py-1 px-3 outline outline-1 outline-gray-300
          bg-dark-blue text-white rounded-lg `
              : ` py-1 px-3 outline outline-1 outline-gray-300 rounded-lg`
          }
          onClick={() => setActiveCategory('frontend')}
        >
          Frontend
        </button>
        <button
          className={
            activeCategory == 'backend'
              ? `py-1 px-3 outline outline-1 outline-gray-300
          bg-dark-blue text-white rounded-lg `
              : ` py-1 px-3 outline outline-1 outline-gray-300 rounded-lg`
          }
          onClick={() => setActiveCategory('backend')}
        >
          Backend
        </button>
      </div>
    </>
  );
};

export default ProjectFilter;
