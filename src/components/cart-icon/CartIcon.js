import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import { ItemCount, ShoppingIcon, CartIconContainer } from './CartIcon.styles';
const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer
		onClick={(e) => {
			// I've done this to stop the conflict with the app div
			e.stopPropagation();
			toggleCartHidden();
		}}
	>
		<ShoppingIcon />
		<ItemCount>{itemCount}</ItemCount>
	</CartIconContainer>
);
const mapStateToProps = (state) => ({
	itemCount: selectItemCount(state),
});
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
