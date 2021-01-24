import './App.css';
import { LandingPage } from './components/';

import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();
		this.state = { wedding: false, party: false, baby: false };
	}

	render() {
		return (
			<div>
				<LandingPage />
			</div>
		);
	}
}
