import React from 'react';

type CategoriesProps = {
  activeCategory: number;
  onChangeActiveCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ activeCategory, onChangeActiveCategory }) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    return (
      <div className="categories">
        <ul>
          {categories.map((item, i) => (
            <li
              key={i}
              onClick={() => onChangeActiveCategory(i)}
              className={activeCategory === i ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);
