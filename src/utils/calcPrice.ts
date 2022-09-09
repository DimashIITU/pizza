import { CartItem } from '../redux/cart/types';

export const calcPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
