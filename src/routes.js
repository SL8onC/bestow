import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import { Wedding, Child, Party } from './components';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={App} />
				<Route path='/wedding' component={Wedding} />
				<Route path='/newchild' component={Child} />
				<Route path='/celebration' component={Party} />
			</Router>
		);
	}
}
