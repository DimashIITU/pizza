export enum SortProporties {
  RATING_ASC = '-rating',
  TITLE_ASC = '-title',
  PRICE_ASC = '-price',
  RATING_DESC = 'rating',
  TITLE_DESC = 'title',
  PRICE_DESC = 'price',
}

export type SortState = {
  name: string;
  sortType: SortProporties;
};

export interface FilterSliceState {
  activeCategory: number;
  activeSort: SortState;
  page: number;
  searchValue: string;
}
export interface FilterParams {
  activeCategory: number;
  sortType: string;
  page: number;
}

export interface FilterSlicePayload {
  activeCategory: number;
  sortObject: SortState;
  page: number;
}
