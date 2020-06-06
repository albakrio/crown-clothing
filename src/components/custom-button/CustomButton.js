import React from 'react';
import './custom-button.scss';

const CustomButton = ({
	children,
	inverted,
	isGoogleSignin,
	buttonMargin,
	...otherProps
}) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogleSignin ? 'google-sign-in' : ''
		} ${buttonMargin ? 'button-margin' : ''}custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
