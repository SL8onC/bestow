import logo from '../giftpictures/001-gift.png';
import React, { Component } from 'react';
import { Choices } from '../components/';
import { Redirect, Link } from 'react-router-dom';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import { motion } from 'framer-motion';

export default class LandingPage extends Component {
	constructor() {
		super();
		this.state = {
			wedding: false,
			party: false,
			baby: false,
			Mouse: false,
			redirect: null,
			enableOutline: false
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this._handleKeydown);
		console.log('state-->', this.state);
		console.log('props-->', this.props);
	}

	mouseEnter = () => {
		this.setState({ Mouse: true });
		console.log('enter state-->', this.state);
	};

	mouseLeave = () => {
		this.setState({ Mouse: false });
		console.log('leave state-->', this.state);
	};

	// Detect a keyboard user from a tab key press
	_handleKeydown = (e) => {
		const isTabEvent = e.keyCode === 9;
		if (isTabEvent) {
			this.setState({ enableOutline: true });
		}
	};

	render() {
		const { mouseEnter, mouseLeave, onClick } = this;
		const { enableOutline, redirect, wedding, party, baby, toggleChoice } = this.state;

		if (redirect) return <Redirect to={redirect} />;

		return (
			<motion.div
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
			>
				<Spring
					from={{ opacity: 0, marginTop: -60 }}
					to={{ opacity: 1, marginTop: 0 }}
					config={{ delay: 800, duration: 3000 }}
				>
					{(props) => (
						<div className='App' style={props}>
							<header className='App-header'>
								{/* prettier-ignore */}
								<pre>B E S T<Link to='/bestow'><img src={logo} tabIndex="0" className={enableOutline ? 'App-logo' : 'no-outline-on-focus App-logo'} alt='logo' onMouseEnter={() => mouseEnter()}onMouseLeave={()=>mouseLeave()} /></Link>W</pre>
							</header>
							<Spring
								from={{ opacity: 0, marginTop: 0 }}
								to={{ opacity: 1, marginTop: -200 }}
								config={{ delay: 1050, duration: 2750 }}
							>
								{(props) => (
									<div className='App' style={props}>
										<p>a minimalist gift registry</p>
									</div>
								)}
							</Spring>
						</div>
					)}
				</Spring>
				<Transition
					native
					items={toggleChoice}
					from={{ position: 'absolute', opacity: 0 }}
					enter={{ opacity: 1 }}
					leave={{ opacity: 0 }}
					config={{ delay: 1050, duration: 1750 }}
				>
					{(show) =>
						show &&
						((props) => (
							<animated.div style={props} className='App-header'>
								<Choices state={this.state} />
							</animated.div>
						))
					}
				</Transition>
			</motion.div>
		);
	}
}
