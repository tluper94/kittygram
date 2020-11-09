import React from 'react';
import '../signin/Signin.css';
import Logo from '../navbar/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	emailChange,
	passwordChange,
	nameChange,
	usernameChange,
	setEmailClass,
	setPasswordClass,
	setNameClass,
	setUsernameClass,
	setErrorClass
} from '../../slices/loginsignupslice';

function Signup({ resetState }) {
	const dispatch = useDispatch();

	let history = useHistory();

	const state = useSelector((state) => state);

	const email = state.loginSignup.email;
	const name = state.loginSignup.name;
	const username = state.loginSignup.username;
	const password = state.loginSignup.password;
	const emailClass = state.loginSignup.emailClass;
	const errorClass = state.loginSignup.errorClass;
	const nameClass = state.loginSignup.nameClass;
	const usernameClass = state.loginSignup.usernameClass;
	const passwordClass = state.loginSignup.passwordClass;

	function validateEmail() {
		if (email > '' && email.includes('@') && email.includes('.')) {
			dispatch(setEmailClass('input-field'));
			return true;
		} else {
			dispatch(setEmailClass('input-field invalid-field'));
			return false;
		}
	}

	const validatePassword = () => {
		const conditions = ['!', '@', '#', '$', '%', '^', '&', '*'];
		let test = conditions.some((el) => password.includes(el));
		if (password.length >= 8 && test) {
			dispatch(setPasswordClass('input-field'));
			return true;
		} else {
			dispatch(setPasswordClass('input-field invalid-field'));
			return false;
		}
	};

	const validateName = () => {
		if (name > '') {
			dispatch(setNameClass('input-field'));
			return true;
		} else {
			dispatch(setNameClass('input-field invalid-field'));
			return false;
		}
	};

	const validateUsername = () => {
		if (username > '') {
			dispatch(setUsernameClass('input-field'));
			return true;
		} else {
			dispatch(setUsernameClass('input-field invalid-field'));
			return false;
		}
	};

	const onSubmit = () => {
		let validEmail = validateEmail();
		let validPassword = validatePassword();
		let validName = validateName();
		let ValidUserName = validateUsername();

		if (validEmail && validPassword && validName && ValidUserName) {
			history.push('/profile');
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
							<p className='error-text'>Please enter the required fields</p>
						</div>
						<div id='signin'>
							<div className='input-container'>
								<div className={emailClass}>
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
											onBlur={validateEmail}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className={nameClass}>
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
											onBlur={validateName}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className={usernameClass}>
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
											onBlur={validateUsername}
										/>
									</label>
								</div>
							</div>
							<div className='input-container'>
								<div className={passwordClass}>
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
											onBlur={validatePassword}
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
								<Link onClick={resetState} to='/signin' className='link'>
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
