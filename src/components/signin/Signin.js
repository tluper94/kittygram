import React from 'react';
import './Signin.css';

function Signin() {
	return (
		<div className='signin'>
			<div className='container'>
				<div className='signin-container'>
					<div className='form-container'>
						<form className='signin-form' method='post' id='signin'>
							<div className='input-container'>
								<div className='input-field'>
									<label htmlFor='username or email'>
										<input
											className='signin-input'
											aria-label='username'
											aria-required='true'
											autoCapitalize='false'
											autoCorrect='flase'
											name='username'
											type='text'
											placeholder='Username or email'
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
										/>
									</label>
								</div>
							</div>
							<div className='btn-container'>
								<button className='login-btn' type='submit'>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Signin;
