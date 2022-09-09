export type CartItem = {
  count: number;
  title: string;
  types: string;
  sizes: number;
  imageUrl: string;
  price: number;
  id: string;
};

export interface CartSliceState {
  price: number;
  items: CartItem[];
}
