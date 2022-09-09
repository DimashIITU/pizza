import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://62e7d4010e5d74566afcea7b.mockapi.io/pizzas/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('Такой пиццы нету');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <>Загрузка...</>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};
export default FullPizza;
