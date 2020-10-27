import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
	name: 'login',
	initialState: {
		email: '',
		password: ''
	},
	reducers: {
		emailChange: (state, action) => Object.assign({}, state, { email: action.payload }),
		passwordChange: (state, action) => Object.assign({}, state, { password: action.payload })
	}
});

export const { emailChange, passwordChange } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
