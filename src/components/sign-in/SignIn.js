import React from 'react';
import './sign-in.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email } = this.state;
		const { password } = this.state;

		return (
			<div className='signin'>
				<h2>I already have an account </h2>
				<span>sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={email}
						handleChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>
					<div className="buttons">
						<CustomButton type='submit'>sign in</CustomButton>
						<CustomButton
							onClick={signInWithGoogle}
							type='submit'
							isGoogleSignin
						>
							{''} sign in with google {''}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;