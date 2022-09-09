import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PizzasItem, TFetchPizzas } from './types';

export const fetchPizzas = createAsyncThunk<PizzasItem[], TFetchPizzas>(
  'pizzas/getPizzasStatus',
  async (params) => {
    const { category, sortedBy, sortedParam, page } = params;
    const { data } = await axios.get<PizzasItem[]>(
      `https://62e7d4010e5d74566afcea7b.mockapi.io/pizzas/?p=${page}&l=4${category}&sortBy=${sortedBy}&order=${sortedParam}`,
    );
    return data;
  },
);
