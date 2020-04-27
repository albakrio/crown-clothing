import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';

// const HatsPage = (props) => {
// 	console.log(props);

// 	return (
// 		<div>
// 			<h1>Hats Page</h1>
// 		</div>
// 	);
// };

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route component={HomePage} path='/' exact />
				<Route component={ShopPage} path='/shop' />
			</Switch>
		</div>
	);
}

export default App;
