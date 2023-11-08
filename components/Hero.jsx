'use client';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/animations.css';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content-container'>
        <div className='max-md:order-2 flex flex-col gap-5 z-40'>
          <div className='text-4xl lg:text-5xl space-y-4'>
            <h1>Hi, I'm Mohammad Shariar Parvez</h1>
            <span className='font-bold text-dark-red inline-block'>
              Fullstack Developer
            </span>
            <h2>From Bangladesh</h2>
            <p className='mt-5 text-xl'>
              Full stack engineer. Coffee-fueled coder. Pizza-powered problem
              solver. Embracing new tech with a smile.
            </p>
          </div>

          <div className='flex gap-4 max-md:justify-center'>
            <Link href='#projects'>
              <button className='bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer'>
                Projects
              </button>
            </Link>
            <Link href='#contact'>
              <button className='bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer'>
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <Image
          src='/assets/hero.png'
          width={400}
          height={400}
          alt='Mohammad Shariar Parvez'
          className='z-10'
        />
      </div>

      <ul className='bg-squares'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;
