import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { loginSignupReducer } from './slices/loginsignupslice';

const appReducer = combineReducers({
	loginSignup: loginSignupReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'CLEAR_STATE') {
		state = undefined;
	}

	return appReducer(state, action);
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()]
});
