import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Wedding, Child, Party } from './components';
import { me } from './store';

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path='/wedding' component={Wedding} />
				<Route path='/newchild' component={Child} />
				<Route path='/celebration' component={Party} />
			</Switch>
		);
	}
}
