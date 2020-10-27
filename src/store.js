import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './components/signin/loginslice';
import { signupReducer } from './components/signup/signupslice';

export const store = configureStore({
	reducer: {
		login: loginReducer,
		signup: signupReducer
	}
});
