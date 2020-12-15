import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loginSignupReducer } from './slices/loginsignupslice';
import { modalReducer } from './components/userprofile/modalslice';
import { userReducer } from './slices/userslice';
import { persistStore, persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
	loginSignup: loginSignupReducer,
	modal: modalReducer,
	user: userReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'CLEAR_STATE') {
		state = undefined;
	}

	return appReducer(state, action);
};

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
});

export let persistor = persistStore(store);
