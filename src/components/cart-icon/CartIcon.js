import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';
import './cart-icon.scss';
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div
		className='cart-icon'
		onClick={(e) => {
			// I've done this to stop the conflict with the app div
			e.stopPropagation();
			toggleCartHidden();
		}}
	>
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
