import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUrl } from 'widgets/url/model/types';

export const fetchUrls = createAsyncThunk<IUrl[]>(
  'guests/fetchGuests',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://localhost:7134/api/shortenedurls',
       
      ); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('не вдалось завантажити');
    }
  },
);