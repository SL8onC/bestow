import './App.css';
import { LandingPage } from './components/';

import React, { Component } from 'react';

export default class App extends Component {
	state = {
		wedding: false,
		party: false,
		baby: false,
		toggleChoice: false
	};

	onClick = () => {
		this.setState({ toggleChoices: true });
		console.log('click state-->', this.state);
	};
	render() {
		return (
			<div>
				<LandingPage onClick={this.onClick} />
			</div>
		);
	}
}
