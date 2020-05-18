import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.scss';
// Stripe integrates money in cents
const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey = 'pk_test_OXRvkptq5Bd29vqQFQO9zp9X00XXN0MfCS';

	const onToken = (token) => {
		console.log(token);
		alert('successful payment');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd '
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			stripeKey={publishKey}
			panelLabel='Pay Now'
			token={onToken}
		/>
	);
};

export default StripeButton;
