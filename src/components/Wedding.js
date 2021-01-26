import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { motion } from 'framer-motion';

import brideChoice from '../brideandgroomchoice/001-bride.png';
import groomChoice from '../brideandgroomchoice/003-groom.png';
import otherChoice from '../brideandgroomchoice/003-dove-1.png';

export default class Wedding extends Component {
	render() {
		return (
			<motion.div
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
					{(props) => (
						<div className='Page-Component' style={props}>
							<header className='App-header'>
								{/* prettier-ignore */}
								<p>What role are you lukcky enough to play in this Wedding?</p>
								<span>
									<img
										src={brideChoice}
										className='App-logo'
										alt='logo'
										onClick={this.onClick}
									/>
									<img
										src={groomChoice}
										className='App-logo'
										alt='logo'
										onClick={this.onClick}
									/>
									<img
										src={otherChoice}
										className='App-logo'
										alt='logo'
										onClick={this.onClick}
									/>
								</span>
							</header>
						</div>
					)}
				</Spring>
			</motion.div>
		);
	}
}
