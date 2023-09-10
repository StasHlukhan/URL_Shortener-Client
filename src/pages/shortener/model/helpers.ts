import { RootState } from 'app/model/store';

export const selectUrls = (state: RootState) => state.urlsReducer.urls;

export const selectLoadState = (state: RootState) => state.urlsReducer.isLoading;