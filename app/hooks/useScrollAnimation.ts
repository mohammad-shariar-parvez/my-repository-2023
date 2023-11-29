import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const useScrollAnimation = (value = 0.5) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, value], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, value], [0.6, 1]);

	return { ref, scaleProgress, opacityProgress };
};

export default useScrollAnimation;