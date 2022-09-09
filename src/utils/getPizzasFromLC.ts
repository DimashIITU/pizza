import { calcPrice } from './calcPrice';

export const getPizzasFromLC = () => {
  const data = localStorage.getItem('cartItems');
  const items = data ? JSON.parse(data) : [];
  const price = calcPrice(items);
  return { items, price };
};
