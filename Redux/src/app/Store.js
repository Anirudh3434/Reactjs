import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Function/reducer';

const Store = configureStore({
  reducer: todoReducer 
 
});

export default Store;
