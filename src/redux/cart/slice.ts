import { createSlice } from '@reduxjs/toolkit';
import { calcPrice } from '../../utils/calcPrice';
import { getPizzasFromLC } from '../../utils/getPizzasFromLC';
import { CartSliceState } from './types';

const { items, price } = getPizzasFromLC();

const initialState: CartSliceState = {
  items,
  price,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.title === action.payload.title &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push(action.payload);
      }
      state.price = calcPrice(state.items);
    },
    removeOneItem(state, action) {
      const findItem = state.items.find(
        (obj) =>
          obj.title === action.payload.title &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes,
      );
      if (findItem) {
        findItem.count--;
        state.price -= findItem.price * findItem.count;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(
        (item) =>
          item.title !== action.payload.title ||
          item.types !== action.payload.types ||
          item.sizes !== action.payload.sizes,
      );
      state.price -= action.payload.price * (!action.payload.count ? 1 : action.payload.count);
    },
    removeItems(state) {
      state.items = [];
      state.price = 0;
    },
  },
});

export const { addItem, removeItem, removeItems, removeOneItem } = cart.actions;

export default cart.reducer;
