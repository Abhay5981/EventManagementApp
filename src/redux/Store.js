import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './viewSlice';

const store = configureStore({
  reducer: {
    view: viewReducer, 
  },
});

export default store;