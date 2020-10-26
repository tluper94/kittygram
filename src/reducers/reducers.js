import { CHECK_VIEWPORT_SIZE } from '../constants';

const intialStateViewport = {
	isDesktop: true
};

export const setViewportSize = (state = intialStateViewport, action = {}) => {
	switch (action.type) {
		case CHECK_VIEWPORT_SIZE:
			return Object.assign({}, state, { isDesktop: action.payload });
		default:
			return state;
	}
};
