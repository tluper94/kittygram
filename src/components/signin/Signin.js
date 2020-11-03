import React from 'react';
import './Signin.css';
import Logo from '../navbar/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	emailChange,
	passwordChange,
	setEmailClass,
	setPasswordClass,
	setErrorClass
} from '../../slices/loginsignupslice';

function Signin({ resetState }) {
	const dispatch = useDispatch();
	let history = useHistory();

	const state = useSelector((state) => state);

	const email = state.loginSignup.email;
	const password = state.loginSignup.password;
	const emailClass = state.loginSignup.emailClass;
	const passwordClass = state.loginSignup.passwordClass;
	const errorClass = state.loginSignup.errorClass;

	console.log(emailClass, passwordClass, errorClass);

	const validateForm = () => {
		let validEmail;
		let validPassword;

		if (email > '') {
			dispatch(setEmailClass('input-field'));
			validEmail = true;
		} else {
			dispatch(setEmailClass('input-field invalid-field'));
			dispatch(setErrorClass('error'));
		}

		if (password > '') {
			dispatch(setPasswordClass('input-field'));
			validPassword = true;
		} else {
			dispatch(setPasswordClass('input-field invalid-field'));
			dispatch(setErrorClass('error'));
		}

		if (validEmail && validPassword) {
			history.push('./profile');
		}
	};

	return (
		<div className='signin'>
			<div className='container'>
				<div className='signin-container'>
					<div className='signin-form-container'>
						<div className='signin-logo'>
							<img className='signin-img' alt='logo' src={Logo} />
						</div>
						<div id='error' className={errorClass}>
							<p className='error-text'>Invalid email or password</p>
						</div>
						<div id='signin'>
							<div className='input-container'>
								<div id='email' className={emailClass}>
									<label htmlFor='username or email'>
										<input
											className='signin-input'
											label='username'
											required={true}
											autoCapitalize='false'
											autoCorrect='flase'
											name='username'
											type='text'
											placeholder='Username or email'
											onChange={(event) => dispatch(emailChange(event.target.value))}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div id='password' className={passwordClass}>
									<label htmlFor='password'>
										<input
											id='password'
											className='signin-input'
											aria-label='password'
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
								<button className='login-btn' type='submit' onClick={validateForm}>
									Login
								</button>
							</div>
						</div>
					</div>
					<div className='signup-link-container'>
						<div>
							<p className='signup-link'>
								Don't have an account?{' '}
								<Link onClick={resetState} to='/signup' className='link'>
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signin;
