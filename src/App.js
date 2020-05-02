import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-&-signup/Signin-&-Signup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					// I had to store the db data in the app state
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser({ userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className='App'>
				<Header  />
				<Switch>
					<Route component={HomePage} path='/' exact />
					<Route component={ShopPage} path='/shop' />
					<Route component={SigninAndSignup} path='/signin' />
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
