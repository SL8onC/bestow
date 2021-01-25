import logo from '../giftpictures/001-gift.png';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Spring, Transition, animate } from 'react-spring/renderprops';

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
	_handleKeydown = (e) => {
		// Detect a keyboard user from a tab key press
		const isTabEvent = e.keyCode === 9;

		if (isTabEvent) {
			this.setState({ enableOutline: true });
		}
	};
	render() {
		const { mouseEnter, mouseLeave } = this;
		const { enableOutline, redirect, wedding, party, baby } = this.state;

		if (redirect) return <Redirect to={redirect} />;

		return (
			<>
				<Spring
					from={{ opacity: 0, marginTop: -60 }}
					to={{ opacity: 1, marginTop: 0 }}
					config={{ delay: 800, duration: 2000 }}
				>
					{(props) => (
						<div className='App' style={props}>
							<header className='App-header'>
								{/* prettier-ignore */}
								<pre>B E S T<img src={logo} tabIndex="0" className={enableOutline ? 'App-logo' : 'no-outline-on-focus App-logo'} alt='logo' onMouseEnter={()=>mouseEnter()}
							onMouseLeave={()=>mouseLeave()} onClick={this.props.onClick} />W</pre>
							</header>
							<Spring
								from={{ opacity: 0, marginTop: 0 }}
								to={{ opacity: 1, marginTop: -200 }}
								config={{ delay: 1050, duration: 1750 }}
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
			</>
		);
	}
}
