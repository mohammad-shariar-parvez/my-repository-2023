import {
  AiFillGithub,
  AiFillYoutube,
  AiFillEye,
  AiOutlineGithub,
} from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ name, server, client, image, deployed, projectUrl }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className='mb-4 p-5 border border-gray-200 rounded-lg shadow-md bg-light-bg'
    >
      <Image
        src={`/${image}`}
        width={600}
        height={600}
        alt={`${name} Image`}
        className=' w-full mb-3 h-auto rounded '
      />
      <h3 className='font-medium text-lg '>{name}</h3>
      <div className='flex gap-5 items-center w-full mt-3'>
        <Link
          href={server ? server : ''}
          target='_blank'
          className='rounded-lg outline outline-1 outline-gray-300 px-4 py-1 text-dark-blue hover:underline text-2xl hover:text-dark-blue/75'
        >
          <AiOutlineGithub />
        </Link>
        <Link
          href={client ? client : ''}
          target='_blank'
          className={
            client
              ? `rounded-lg outline outline-1 outline-gray-300 px-4 py-1 text-dark-blue hover:underline text-2xl hover:text-dark-blue/75`
              : `hidden`
          }
        >
          <AiOutlineGithub />
        </Link>

        {deployed ? (
          <Link
            href={projectUrl ? projectUrl : ''}
            target='_blank'
            className={
              projectUrl
                ? 'rounded-lg outline outline-1 outline-gray-300 px-4 py-1 text-dark-blue hover:underline text-2xl hover:text-dark-blue/75'
                : 'hidden'
            }
          >
            <AiFillEye />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
