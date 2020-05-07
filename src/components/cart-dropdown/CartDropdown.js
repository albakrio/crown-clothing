import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import './cart-dropdown.scss';
import CartItem from '../cart-item/CartItem';

const CartDropdown = ({ cartItems }) => {
	console.log(cartItems);

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}

				<CustomButton>GO TO CHECKOUT</CustomButton>
			</div>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
