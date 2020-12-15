import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: {
			user_id: '',
			email: '',
			name: ' ',
			joined: '',
			last_login: '',
			username: '',
			profile_img: ''
		}
	},
	reducers: {
		setUser: (state, action) => Object.assign({}, state, { currentUser: action.payload })
	}
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
