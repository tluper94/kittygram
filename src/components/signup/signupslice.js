import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
	name: 'signup',
	initialState: {
		email: '',
		name: '',
		username: '',
		password: ''
	},
	reducers: {
		emailChange: (state, action) => Object.assign({}, state, { email: action.payload }),
		nameChange: (state, action) => Object.assign({}, state, { name: action.payload }),
		usernameChange: (state, action) => Object.assign({}, state, { username: action.payload }),
		passwordChange: (state, action) => Object.assign({}, state, { password: action.payload })
	}
});

export const { emailChange, nameChange, usernameChange, passwordChange } = signupSlice.actions;
export const signupReducer = signupSlice.reducer;
