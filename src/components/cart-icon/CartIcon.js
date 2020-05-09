import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);
const mapStateToProps = (state) => ({
	itemCount: selectItemCount(state),
});
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
