import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { loginSignupReducer } from './slices/loginsignupslice';
import { modalReducer } from './components/userprofile/modalslice';

const appReducer = combineReducers({
	loginSignup: loginSignupReducer,
	modal: modalReducer
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
