'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

import { useMenuStore } from '@/store/useMenuStore';
import { sidebarMenuLinks } from '@/constants';
import path from 'path';
import { set } from 'zod';
import Link from 'next/link';

const SideMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const { isOpen, closeMobileMenu } = useMenuStore();

  const handleLinkClick = (link) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, '');

    const matchedLink = sidebarMenuLinks.find(
      (link) =>
        cleanedPathname === link.route ||
        (link.route === '/' && cleanedPathname === '')
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);
  const hiddenStyle = {
    opacity: 0.9,
    scale: 0.5,
    transition: {
      duration: 0.3,
    },
  };

  const visibleStyle = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpen]);

  return (
    <motion.div
    // initial={hiddenStyle}
    // animate={isOpen ? visibleStyle : hiddenStyle}
    // layout
    >
      <motion.section
        className={`side-menu border-r ${
          isOpen ? 'max-lg:block' : 'max-md:hidden'
        }`}
      >
        <div className='flex w-full flex-1 flex-col gap-10 justify-between items-center'>
          <div className='flex justify-center items-center flex-col gap-2'>
            <Image
              src='/assets/my-image.png'
              width={100}
              height={100}
              alt='msp'
              className='rounded-full'
            />
            <p className='font-bold text-dark-blue'>Mohammad Shariar Parvez</p>
          </div>

          <div>
            {sidebarMenuLinks.map((link) => {
              const isActive = activeLink === link;

              return (
                <a
                  href={`${link.route}`}
                  key={link.label}
                  className={`relative flex justify-center items-center rounded-lg p-3 ${
                    isActive
                      ? 'bg-gradient-to-r from-light-orrange  to-dark-orrange text-white'
                      : ''
                  }`}
                  onClick={() => handleLinkClick(link)}
                >
                  <p>{link.label}</p>
                </a>
              );
            })}
          </div>
          <div className='flex items-center flex-col justify-center text-center'>
            <div className='flex flex-col lg:flex-row items-center gap-4 mb-3'>
              <Link
                href='https://www.facebook.com/thunder.tonmoy'
                target='_blank'
                className='text-3xl text-dark-blue'
              >
                <AiFillFacebook />
              </Link>
              <Link
                href='https://www.linkedin.com/in/mrmsp'
                target='_blank'
                className='text-3xl text-dark-blue'
              >
                <AiFillLinkedin />
              </Link>

              <Link
                href='https://github.com/mrmsp-dev'
                target='_blank'
                className='text-3xl text-dark-blue'
              >
                <AiFillGithub />
              </Link>
              {/* <Link href='/' target='_blank' className='social-icon text-white'>
                <FaDev />
              </Link> */}
            </div>
            <p className='max-lg:hidden'>
              Copyright © 2023 Mohammad Shariar Parvez. All rights reserved.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SideMenu;
