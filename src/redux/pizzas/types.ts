export type TFetchPizzas = {
  category: string;
  sortedBy: string;
  sortedParam: string;
  page: number;
};

export type PizzasItem = {
  count: number;
  title: string;
  types: number[];
  sizes: number[];
  imageUrl: string;
  price: number;
  id: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: PizzasItem[];
  pizzaLoad: Status;
}
