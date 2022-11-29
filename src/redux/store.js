import { configureStore } from '@reduxjs/toolkit';
import categories from './categoriesSlice';
import currency from './currencySlice';
import cart from './cartSlice';

/* Creating a store with the reducers. */
export const store = configureStore({
   reducer: {
      categories,
      currency,
      cart,
   }
});