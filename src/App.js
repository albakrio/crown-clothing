import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-&-signup/Signin-&-Signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					// I had to store the db data in the app state
					this.setState(
						{
							currentUser: {
								id: snapshot.id,
								...snapshot.data(),
							},
						},
						() => console.log(this.state)
					);
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route component={HomePage} path='/' exact />
					<Route component={ShopPage} path='/shop' />
					<Route component={SigninAndSignup} path='/signin' />
				</Switch>
			</div>
		);
	}
}

export default App;
