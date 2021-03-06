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

function Signin({ resetState, currentUser }) {
	//Assigns the redux useDispatch hook to the variable dispatch
	const dispatch = useDispatch();

	//Assigns the react-router useHistory hook to the variable history
	let history = useHistory();

	//Assigns the useSelector hook to the state variable
	const state = useSelector((state) => state);

	// Gets state from redux and assigns it to a variable
	const email = state.loginSignup.email;
	const password = state.loginSignup.password;
	const emailClass = state.loginSignup.emailClass;
	const passwordClass = state.loginSignup.passwordClass;
	const errorClass = state.loginSignup.errorClass;

	//Checks if user's email is valid
	const validateEmail = () => {
		// If user's email is greater than an empty string function returns true.
		if (email > '') {
			/*Dispatches 'input-field' to the setEmailClass reducer and 
			set the emailClass state to input-field to remove error highlight from email field*/
			dispatch(setEmailClass('input-field'));
			return true;
		} else {
			/* If user email is invalid, then 'input-field invalid-field'  gets dispatched to 
			the setEmailClass reducer to set the emailClass state to 'input-field invalid-field'
			to highlight email field red*/
			dispatch(setEmailClass('input-field invalid-field'));
			return false;
		}
	};

	const validatePassword = () => {
		if (password > '') {
			dispatch(setPasswordClass('input-field'));
			return true;
		} else {
			dispatch(setPasswordClass('input-field invalid-field'));
			return false;
		}
	};

	const validateForm = () => {
		let validEmail = validateEmail();
		let validPassword = validatePassword();

		if (validEmail && validPassword) {
			history.push(`./${currentUser}`);
		} else {
			dispatch(setErrorClass('error'));
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
											onChange={(event) => {
												dispatch(emailChange(event.target.value));
												validateEmail();
											}}
											onBlur={validateEmail}
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
											onChange={(event) => {
												dispatch(passwordChange(event.target.value));
												validatePassword();
											}}
											onBlur={validatePassword}
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
