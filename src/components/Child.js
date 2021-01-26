import React from 'react';
import { motion } from 'framer-motion';

const Child = () => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			<p>I love you</p>
		</motion.div>
	);
};

export default Child;
