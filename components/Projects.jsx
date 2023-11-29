'use client';

import React, { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import ProjectFilter from '../components/ProjectFilter';
import ProjectCard from '../components/ProjectCard';
import { projects } from '@/constants/projects';
import useScrollAnimation from '@/app/hooks/useScrollAnimation';
import '@/app/skalaton.css';

const Projects = () => {
  // const { ref, scaleProgress, opacityProgress } = useScrollAnimation(1);

  const [activeCategory, setActiveCategory] = useState('fullstack');
  const [filtered, setFiltered] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <motion.div
      // ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      layout
    >
      <div
        className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white min-h-[500px] '
        id='projects'
      >
        <div className='max-w-[1250px] m-auto '>
          <div className='inline-block'>
            <p className='section-title'>
              <span className='mb-1'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 0 L16 8 L8 16 L0 8 L8 0Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </span>
              Projects
            </p>
          </div>
          <ProjectFilter
            setFiltered={setFiltered}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10  '>
            <AnimatePresence>
              {filtered?.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  server={project?.server}
                  client={project?.client}
                  image={project.image}
                  projectUrl={project.projectUrl}
                  deployed={project.deployed}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* {visibleProjects < filtered.length && (
          <div className='text-center mt-4'>
            <button
              className='bg-dark-blue hover:bg-dark-blue/75 py-2 px-4 text-white rounded-lg'
              onClick={loadMoreProjects}
            >
              Show More
            </button>
          </div>
        )} */}
          {/* <div class='project-card-skeleton'>
            <div class='skeleton-image'></div>
            <div class='skeleton-text'></div>
            <div class='skeleton-text'></div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
