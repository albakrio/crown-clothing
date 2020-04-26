import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = (props) => {
	console.log(props);
	
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route component={HomePage} path='/' exact />
				<Route component={HatsPage} path='/hats' />
			</Switch>
		</div>
	);
}

export default App;
