import React from 'react';
import './signin-&-signup.scss';
import SignIn from '../../components/sign-in/SignIn';
import Signup from '../../components/sign-up/Signup';

const SigninAndSignup = () => (
	<div className='signin-and-signup'>
		<SignIn />
		<Signup />
	</div>
);

export default SigninAndSignup;
