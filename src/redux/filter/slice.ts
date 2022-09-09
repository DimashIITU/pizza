import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortProporties, SortState, FilterSlicePayload } from './types';

const initialState: FilterSliceState = {
  activeCategory: 0,
  activeSort: {
    name: 'популярности',
    sortType: SortProporties.PRICE_DESC,
  },
  page: 1,
  searchValue: '',
};

const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setActiveSort(state, action: PayloadAction<SortState>) {
      state.activeSort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSlicePayload>) {
      state.page = Number(action.payload.page);
      state.activeCategory = Number(action.payload.activeCategory);
      state.activeSort = action.payload.sortObject;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setActiveCategory, setActiveSort, setPage, setFilters, setSearchValue } =
  filter.actions;

export default filter.reducer;
