'use client';

import {
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Toast from './Toaster';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmiError, setIsSubmiError] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1p1pabl',
        'template_e6ra0ui',
        form.current,
        'laspjFSO16IKLSScA'
      )
      .then((result) => {
        console.log(result);
        setIsSubmitted(true);
        form.current.reset();
      })
      .catch((error) => {
        setIsSubmiError(true);
        console.log(error.text);
      });
  };

  return (
    <div
      className='w-full h-fit px-[40px]  py-10 md:py-20 max-xs:px-[20px] relative bg-light-bg'
      id='contact'
    >
      {isSubmitted ? (
        <Toast
          message={'Account Created Successfully'}
          setIsSubmitted={setIsSubmitted}
          color={'green'}
        />
      ) : null}
      {isSubmiError ? (
        <Toast
          message={'Couldn not sent email'}
          setIsSubmiError={setIsSubmiError}
          color='green'
        />
      ) : null}
      <div className='max-w-[1250px] mx-auto'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <div className='inline-block'>
              <p className='section-title mb-10'>
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
                Contact Me
              </p>
            </div>
            <p className='text-dark-blue'>
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want to run past me. I'm
              also avaliable for hire as well.
            </p>
            <p className='text-dark-blue mt-12'>Email me at</p>
            <h4>
              <a href='#' className='text-lg font-semibold text-dark-blue'>
                msptonmoy@gmail.com
              </a>
            </h4>
            <div className='mt-12'>
              <div className='flex flex-col gap-2 space-y-2'>
                <h5 className='text-dark-blue'>Socials</h5>
                <div className='flex gap-5'>
                  <Link
                    href='https://github.com/mrmsp-dev'
                    className='text-3xl text-dark-blue'
                    target='_blank'
                  >
                    <AiFillGithub />
                  </Link>
                  <Link
                    href='https://www.instagram.com/parvezmohammadshariar/'
                    className='text-3xl text-dark-blue'
                    target='_blank'
                  >
                    <AiFillInstagram />
                  </Link>
                  <Link
                    href='https://www.linkedin.com/in/mrmsp'
                    className='text-3xl text-dark-blue'
                    target='_blank'
                  >
                    <AiFillLinkedin />
                  </Link>

                  <Link href='#' className='text-3xl text-dark-blue'>
                    <AiFillTwitterSquare />
                  </Link>
                </div>
                <Image
                  src='/assets/wechat.png'
                  width={130}
                  height={130}
                  alt='html'
                  className='mb-2 '
                />
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={sendEmail} ref={form} className='w-full'>
              <div>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your name'
                  className='w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red'
                />
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  placeholder='Your email'
                  autoComplete='email'
                  className='w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red'
                />
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  required
                  placeholder='Subject'
                  className='w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red'
                />
                <textarea
                  className='w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-dark-red'
                  id='message'
                  name='message'
                  rows='7'
                  style={{ resize: 'none' }}
                  placeholder='Message'
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='py-3 px-6 font-semibold text-white bg-dark-red hover:shadow-lg hover:bg-dark-red/75 transition-all duration-500 rounded'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
