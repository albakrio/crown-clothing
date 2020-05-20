import React from 'react';
import { CustomButtonContainer } from './CustomButton.styles';
//import './custom-button.scss';

const CustomButton = ({ children, ...otherProps }) => (
	<CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
