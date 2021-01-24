import logo from './giftpictures/001-gift.png';
import './App.css';

import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export default class App extends Component {
	constructor() {
		super();
		this.state = { wedding: false, party: false, baby: false };
	}

	render() {
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
								<pre>B E S T<img src={logo} className='App-logo' alt='logo' onClick={this.onClick} />W</pre>
							</header>
						</div>
					)}
				</Spring>
				<Spring
					from={{ opacity: 0, marginTop: 20 }}
					to={{ opacity: 1, marginTop: -60 }}
					config={{ delay: 1200, duration: 1500 }}
				>
					{(props) => (
						<div style={{ props }}>
							<p>a minimalist gift registry</p>
						</div>
					)}
				</Spring>
			</>
		);
	}
}
