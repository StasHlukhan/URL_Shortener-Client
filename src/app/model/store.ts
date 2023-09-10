import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistedUserReducer } from 'shared/store/user/slice';
import { modalReducer } from 'shared/store/modal/slice';
import { urlsReducer } from 'shared/store/urls/slice';

const rootReducer = combineReducers({
  userReducer: persistedUserReducer,
  modalReducer,
  urlsReducer
});

export const setupStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
