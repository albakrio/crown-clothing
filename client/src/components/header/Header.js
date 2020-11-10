import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import './header.scss';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>

				{currentUser ? (
					<div onClick={() => auth.signOut()} className='option'>
						SIGN OUT
					</div>
				) : (
					<Link to='/signin' className='option'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

//state.user.currentUser = {user: {currenUser}} && state.cart.hidden ={cart: {hidden}}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden,
});
export default connect(mapStateToProps)(Header);
