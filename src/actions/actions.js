import { CHECK_VIEWPORT_SIZE } from '../constants';

export const CheckViewport = (boolean) => ({
	type: CHECK_VIEWPORT_SIZE,
	payload: boolean
});
