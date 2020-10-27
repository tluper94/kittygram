import React from 'react';
import '../signin/Signin.css';
import Logo from '../navbar/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { emailChange, nameChange, usernameChange, passwordChange } from './signupslice';
import Userprofile from '../userprofile/UserProfile';

function Signup() {
	const dispatch = useDispatch();

	let history = useHistory();

	const email = useSelector((state) => state.signup.email);
	const name = useSelector((state) => state.signup.name);
	const username = useSelector((state) => state.signup.username);
	const password = useSelector((state) => state.signup.password);

	function onSubmit() {
		const error = document.querySelector('#error');
		if (email && name && username && password > '') {
			if (error.classList.contains('error')) {
				error.classList.remove('error');
			}
			history.push('/profile');
		} else {
			if (!error.classList.contains('error')) {
				error.classList.add('error');
			}
		}
	}
	return (
		<div className='signin'>
			<div className='container'>
				<div className='signin-container'>
					<div className='signin-form-container'>
						<div className='signin-logo'>
							<img className='signin-img' alt='logo' src={Logo} />
						</div>
						<div id='error' className='remove'>
							<p className='error-text'>Please enter the required fields</p>
						</div>
						<div id='signin'>
							<div className='input-container'>
								<div className='input-field'>
									<label htmlFor='email'>
										<input
											className='signin-input'
											label='email'
											required={true}
											autoCapitalize='false'
											autoCorrect='flase'
											name='email'
											type='text'
											placeholder='Email'
											onChange={(event) => dispatch(emailChange(event.target.value))}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className='input-field'>
									<label htmlFor='name'>
										<input
											className='signin-input'
											label='name'
											required={true}
											autoCapitalize='false'
											autoCorrect='flase'
											name='name'
											type='text'
											placeholder='Full name'
											onChange={(event) => dispatch(nameChange(event.target.value))}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className='input-field'>
									<label htmlFor='username'>
										<input
											className='signin-input'
											label='username'
											required={true}
											autoCapitalize='false'
											autoCorrect='flase'
											name='username'
											type='text'
											placeholder='Username'
											onChange={(event) =>
												dispatch(usernameChange(event.target.value))
											}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className='input-field'>
									<label htmlFor='password'>
										<input
											className='signin-input'
											aria-label='username'
											aria-required='true'
											autoCapitalize='false'
											autoCorrect='flase'
											name='username'
											type='password'
											placeholder='Password'
											onChange={(event) =>
												dispatch(passwordChange(event.target.value))
											}
										/>
									</label>
								</div>
							</div>
							<div className='btn-container'>
								<button className='login-btn' type='submit' onClick={onSubmit}>
									Signup
								</button>
							</div>
						</div>
					</div>
					<div className='signup-link-container'>
						<div>
							<p className='signup-link'>
								Have an account?{' '}
								<Link to='/signin' className='link'>
									Sign in
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signup;
