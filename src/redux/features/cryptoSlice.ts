import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCryptoData } from '../../services/cryptoService';

export const getCryptoData = createAsyncThunk(
  'crypto/fetchData',
  async () => {
    const response = await fetchCryptoData();
    return response.data;
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getCryptoData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cryptoSlice.reducer;
