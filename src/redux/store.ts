import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './features/cryptoSlice';
import { useDispatch, useSelector } from 'react-redux';
// import portfolioReducer from './features/portfolioSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    // portfolio: portfolioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();