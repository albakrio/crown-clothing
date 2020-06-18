import React, { useState } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	});

	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setUserCredentials({
				email: '',
				password: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className='signin'>
			<h2>I already have an account </h2>
			<span>sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					handleChange={handleChange}
					label='Email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} type='submit' isGoogleSignin>
						sign in with google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
