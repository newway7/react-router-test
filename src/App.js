import React, {Component} from 'react';
import {Switch, Route, Link, HashRouter as Router} from 'react-router-dom'
import Path from './Path'
import Query from './Query'
import State from './State'
import Home from './Home'
import logo from './logo.svg';
import './App.css';
import {WithAuth} from './withAuth.js'





class App extends Component {

	render() {
		let obj = {
			pathname: '/component',
			search: 'sort=name',
			test: { fromDashboard: 123 },
			state: { fromDashboard: 123 },
			query: { fromDashboard: 123 }
		  }
		var state = {
			pathname: '/state',
			state: '我是通过state传值'
		}
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<div className="App-intro">
						<div><Link to="/path/通配符">通配符</Link></div>
						<div><Link to={obj}>component</Link></div>
						<div><Link to={state}>state</Link></div>
					</div>
					<div>
						<h3>内容</h3>
						<Switch>
						    
							<Route path='/path/:name' component={Path}/>
							<WithAuth path="/component" component={Query}/>
							<Route path='/state' component={State}/>
							<Route path='/*' component={Home}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
