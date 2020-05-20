import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	@extend .custom-button;
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
		color: white;
	}
`;

const buttonMargin = css`
	margin-top: auto;
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignin) {
		return googleSignInStyles;
	} else if (props.buttonMargin) {
		return buttonMargin;
	}
	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	text-transform: uppercase;
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;

	${getButtonStyles}
`;
