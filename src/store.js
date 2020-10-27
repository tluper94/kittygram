import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './components/signin/loginslice';
import { signupReducer } from './components/signup/signupslice';

const appReducer = combineReducers({
	login: loginReducer,
	signup: signupReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		state = undefined;
	}

	return appReducer(state, action);
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()]
});
