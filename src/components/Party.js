import { motion } from 'framer-motion';
import React from 'react';

const Party = (props) => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			<p>I love you when you party</p>
		</motion.div>
	);
};

export default Party;
