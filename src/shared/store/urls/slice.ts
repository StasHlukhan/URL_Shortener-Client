import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {    fetchUrls } from './actionCreators';
import { IUrl } from 'widgets/url/model/types';



interface Urlstate {
  urls: IUrl[];
  isLoading: boolean;
  error: string;
}

const initialState: Urlstate = {
  isLoading: false,
  error: '',
  urls: [],

};

export const Urlslice = createSlice({
  name: 'urls',
  initialState,
  reducers: {
    urlAdded: (state, action) => {
      state.urls.unshift(action.payload); 
      
    },
    setUrls: (state, action) => {
      state.urls =  action.payload;
    },
    urlRemoved: (state, action) => {
        state.urls = state.urls.filter(url => url.id !== action.payload);
      },
  
  },
  extraReducers: {
    
    [fetchUrls.fulfilled.type]: (state, action: PayloadAction<IUrl[]>) => {
      state.isLoading = false;
      state.error = '';
      state.urls = action.payload;
    },
    [fetchUrls.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUrls.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  
    
  },
});

export const {  setUrls,urlAdded,urlRemoved} = Urlslice.actions;

export const urlsReducer =  Urlslice.reducer


