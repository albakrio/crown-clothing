import React, { useEffect } from 'react';
import * as Sentry from '@sentry/react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SigninAndSignup from './pages/signin-&-signup/Signin-&-Signup';
import Checkout from './pages/checkout/Checkout';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { toggleCartHiddenBody } from './redux/cart/cart.actions';
import { selectHidden } from './redux/cart/cart.selectors';
Sentry.init({
	dsn:
		'https://fccaeb62ecf54caf84efc95055bbf869@o416812.ingest.sentry.io/5313416',
});
const App = ({
	setCurrentUser,
	toggleCartHidden,
	currentUser,
	toggleCartHiddenBody,
}) => {
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
		return () => {
			unsubscribe();
		};
	}, [setCurrentUser]);

	return (
		<div
			onClick={() => {
				if (toggleCartHidden === false) {
					return toggleCartHiddenBody();
				}
			}}
			className='App'
		>
			<Header />
			<Switch>
				<Route exact component={HomePage} path='/' />
				<Route component={ShopPage} path='/shop' />
				<Route exact component={Checkout} path='/checkout' />
				<Route
					exact
					path='/signin'
					render={() =>
						currentUser ? <Redirect to='/' /> : <SigninAndSignup />
					}
				/>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	toggleCartHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	toggleCartHiddenBody: () => dispatch(toggleCartHiddenBody()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
