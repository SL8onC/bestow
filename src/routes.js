import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { Wedding, Child, Party, Choices } from './components';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={App} />
				<Route path='/bestow' component={Choices} />
				<Route path='/wedding' component={Wedding} />
				<Route path='/newchild' component={Child} />
				<Route path='/celebration' component={Party} />
			</Router>
		);
	}
}
