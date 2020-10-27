import React from 'react';
import './Signin.css';
import Logo from '../navbar/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { emailChange, passwordChange } from './loginslice';

function Signin() {
	const dispatch = useDispatch();

	const email = useSelector((state) => state.login.email);
	const password = useSelector((state) => state.login.password);

	function onSubmit() {
		if (email && password > '') {
			console.log('email:', email, 'password:', password);
		} else {
			console.log('error');
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
						<div id='signin'>
							<div className='input-container'>
								<div className='input-field'>
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
									Login
								</button>
							</div>
						</div>
					</div>
					<div className='signup-link-container'>
						<div>
							<p className='signup-link'>
								Don't have an account?{' '}
								<Link to='/signup' className='link'>
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
