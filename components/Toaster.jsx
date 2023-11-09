/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
'use Client';
import React, { useEffect, useState } from 'react';

const Toast = ({ color, message, setIsSubmitted, setIsSubmiError }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // This will trigger the transition after a short delay
    const timer = setTimeout(() => {
      console.log('654');
      if (setIsSubmitted) {
        setIsSubmitted(false);
      }
      if (setIsSubmiError) {
        setIsSubmiError(false);
      }
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-16 left-0 md:bottom-2 z-50 duration-300 transform ${
        !isVisible ? 'translate-x-0' : '-translate-x-full'
      } transition-transform  z-50  bg-${color}-200`}
    >
      <div className={`flex items-center p-4  text-gray-500  rounded-lg  `}>
        <div
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8  rounded-lg`}
        >
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
        </div>
        <div className='ml-3 text-sm font-normal'>{message}</div>
      </div>
    </div>
  );
};

export default Toast;
