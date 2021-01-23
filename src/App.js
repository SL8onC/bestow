import logo from './giftpictures/001-gift.png';
import './App.css';

import React, { Component } from 'react';
import { Transition } from 'react-spring/renderprops';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			beginFlip: false,
			items: [
				{ key: 1, text: 'hello' },
				{ key: 2, text: 'hello' },
				{ key: 3, text: 'hello' },
				{ key: 4, text: 'hello' },
				{ key: 5, text: 'hello' }
			]
		};
		this.onClick = this.onClick.bind(this);
	}
	onClick() {
		this.setState({ beginFlip: !this.state.beginFlip });
	}
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					{/* prettier-ignore */}
					<pre>B E S T <img src={logo} className='App-logo' alt='logo' onClick={this.onClick}/> W</pre>
					<p>a minimalist gift registry</p>
				</header>

				<Transition
					items={this.state.items}
					keys={(item) => item.key}
					from={{ transform: 'translate3d(0,-40px,0)' }}
					enter={{ transform: 'translate3d(0,0px,0)' }}
					leave={{ transform: 'translate3d(0,-40px,0)' }}
				>
					{(item) => () => <div style={{ backgroundimage: '' }} />}
				</Transition>
			</div>
		);
	}
}
