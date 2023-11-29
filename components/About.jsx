'use client';
import useScrollAnimation from '@/app/hooks/useScrollAnimation';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
const About = () => {
  // const { ref, scaleProgress, opacityProgress } = useScrollAnimation(1);
  return (
    <motion.div
      // ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      layout
    >
      <section
        className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white'
        id='about'
      >
        <div className='max-w-[1250px] mx-auto'>
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
              About Me
            </p>
          </div>

          <div className='mt-7'>
            <p className='mt-6 text-gray-600 text-xl  leadiing-10'>
              Assalamualaikum, I'm a Software Engineering graduate with a
              passion for coding and full-stack web technologies. Having
              completed various projects during my academic journey, I continue
              to delve deeper every day. Eager to learn more and committed to
              enhancing my skills, I look forward to new challenges and
              opportunities in the field.
            </p>
          </div>

          <div className='mt-10'>
            <div className='w-full'>
              <ul className='flex justify-between gap-10 flex-col md:flex-row'>
                <li className='w-full shadow-sm'>
                  <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg'>
                    <h3 className='text-[40px] mb-3px font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-orrange  to-dark-orrange'>
                      BSc
                    </h3>

                    <span className='uppercase block'>
                      Hubei University of Technology ,China
                    </span>
                  </div>
                </li>
                <li className='w-full shadow-sm'>
                  <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg'>
                    <h3 className='text-[40px] mb-[3px font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-orrange  to-dark-orrange'>
                      15+
                    </h3>
                    <span className='uppercase'>Projects Completed</span>
                  </div>
                </li>
                <li className='w-full shadow-sm'>
                  <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg'>
                    <h3 className='text-[40px] mb-[3px font-bold bg-clip-text text-transparent bg-gradient-to-r from-light-orrange  to-dark-orrange'>
                      100+
                    </h3>
                    <span className='uppercase'>Problems Solved</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
