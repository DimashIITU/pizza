import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asynkActions';
import { PizzaSliceState, Status } from './types';

const initialState: PizzaSliceState = {
  items: [],
  pizzaLoad: Status.LOADING,
};

const pizzas = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzaLoad = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaLoad = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzaLoad = Status.ERROR;
      state.items = [];
    });
  },
  //   extraReducers: {
  //     [fetchPizzas.pending]: (state) => {
  //       state.pizzaLoad = 'loading';
  //       state.items = [];
  //     },
  //     [fetchPizzas.fulfilled]: (state, action) => {
  //       state.pizzaLoad = 'succes';
  //       state.items = action.payload;
  //     },
  //     [fetchPizzas.rejected]: (state) => {
  //       state.pizzaLoad = 'error';
  //       state.items = [];
  //     },
  //   },
});

export const { addItem } = pizzas.actions;

export default pizzas.reducer;
