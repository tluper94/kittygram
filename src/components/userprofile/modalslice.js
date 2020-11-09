import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'Modal',
	initialState: {
		displayModal: 'modal'
	},

	reducers: {
		setModalClass: (state, action) => Object.assign({}, state, { displayModal: action.payload })
	}
});

export const { setModalClass } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
