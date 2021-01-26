import './App.css';
import React, { Component } from 'react';
import { LandingPage } from './components/';

import { motion } from 'framer-motion';

export default class App extends Component {
	render() {
		return (
			<motion.div
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				<LandingPage />
			</motion.div>
		);
	}
}
