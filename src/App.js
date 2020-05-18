import React from 'react';
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

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			//userAuth is the user info in Authentication
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					// I had to store the db data in the app state; snapshot is info of the db
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div
				onClick={() => {
					if (this.props.toggleCartHidden === false) {
						return this.props.toggleCartHiddenBody();
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
							this.props.currentUser ? <Redirect to='/' /> : <SigninAndSignup />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	toggleCartHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	toggleCartHiddenBody: () => dispatch(toggleCartHiddenBody()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
