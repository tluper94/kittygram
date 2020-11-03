import { createSlice } from '@reduxjs/toolkit';

const loginSignupSlice = createSlice({
	name: 'form',
	initialState: {
		email: '',
		password: '',
		name: '',
		username: '',
		errorClass: 'remove',
		emailClass: 'input-field',
		passwordClass: 'input-field',
		nameClass: 'input-field',
		usernameClass: 'input-field'
	},
	reducers: {
		emailChange: (state, action) => Object.assign({}, state, { email: action.payload }),
		passwordChange: (state, action) => Object.assign({}, state, { password: action.payload }),
		nameChange: (state, action) => Object.assign({}, state, { name: action.payload }),
		usernameChange: (state, action) => Object.assign({}, state, { username: action.payload }),
		setErrorClass: (state, action) => Object.assign({}, state, { errorClass: action.payload }),
		setEmailClass: (state, action) => Object.assign({}, state, { emailClass: action.payload }),
		setPasswordClass: (state, action) => Object.assign({}, state, { passwordClass: action.payload }),
		setNameClass: (state, action) => Object.assign({}, state, { nameClass: action.payload }),
		setUsernameClass: (state, action) => Object.assign({}, state, { usernameClass: action.payload })
	}
});

export const {
	emailChange,
	passwordChange,
	nameChange,
	usernameChange,
	setErrorClass,
	setEmailClass,
	setPasswordClass,
	setNameClass,
	setUsernameClass
} = loginSignupSlice.actions;

export const loginSignupReducer = loginSignupSlice.reducer;
