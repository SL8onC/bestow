import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import weddingChoice from '../choicepictures/004-engagement-1.png';
import partyChoice from '../choicepictures/004-engagement-1.png';
import childChoice from '../choicepictures/005-toys.png';

export default class Choices extends Component {
	render() {
		return (
			<div className='App-header'>
				<h2>What's the occasion?</h2>
				<span>
					<Link>
						<img
							src={weddingChoice}
							className='App-logo'
							alt='logo'
							onClick={this.onClick}
						/>
					</Link>
					<Link>
						<img
							src={partyChoice}
							className='App-logo'
							alt='logo'
							onClick={this.onClick}
						/>
					</Link>
					<Link>
						<img
							src={childChoice}
							className='App-logo'
							alt='logo'
							onClick={this.onClick}
						/>
					</Link>
				</span>
			</div>
		);
	}
}
