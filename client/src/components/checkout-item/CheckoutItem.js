import React from 'react';
import { connect } from 'react-redux';
import {
	clearCartItem,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';
import './checkout-item.scss';
const CheckoutItem = ({ cartItem, clearCartItem, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div onClick={()=> removeItem(cartItem)} className='arrow'>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div onClick={()=> addItem(cartItem)} className='arrow'>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div onClick={() => clearCartItem(cartItem)} className='remove-button'>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearCartItem: (item) => dispatch(clearCartItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
