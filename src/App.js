import React, {Component} from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import 'normalize.css/normalize.css';

import Intro from './components/Intro/Intro';
import Blog from './components/Blog/Blog';

class App extends Component {
	render() {
		return ((
			<Router history={browserHistory}>
				<Route>
					<Route path="/" component={Intro}/>
					<Route path="blog" component={Blog}/>
				</Route>
			</Router>

		))
	}
}

export default App;
