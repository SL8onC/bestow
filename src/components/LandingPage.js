import logo from '../giftpictures/001-gift.png';
import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export default class LandingPage extends Component {
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
