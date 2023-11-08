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
      className='mb-4 p-4 border border-gray-200 rounded-lg shadow-md bg-light-bg'
    >
      <Image
        src={`/${image}`}
        width={600}
        height={600}
        alt={`${name} Image`}
        className=' w-full mb-3 h-auto rounded '
      />
      <h3>{name}</h3>
      <div className='flex gap-2 items-center w-full'>
        <Link
          href={server}
          target='_blank'
          className='text-dark-blue hover:underline text-2xl hover:text-dark-blue/75'
        >
          <Image
            src='/assets/git.svg.png'
            width={20}
            height={20}
            alt='github'
          />
        </Link>
        <Link
          href={client}
          target='_blank'
          className=' text-dark-blue hover:underline text-2xl hover:text-dark-blue/75'
        >
          <AiOutlineGithub />
        </Link>

        {deployed ? (
          <a
            href={projectUrl}
            target='_blank'
            className='text-dark-blue hover:underline text-2xl hover:text-dark-blue/75'
          >
            <AiFillEye />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
