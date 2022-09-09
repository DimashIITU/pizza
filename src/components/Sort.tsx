import React, { useEffect, useRef } from 'react';
import { SortState, SortProporties } from '../redux/filter/types';

type SortProps = {
  activeSort: SortState;
  onChooseSort: (obj: SortState) => void;
  openSort: boolean;
  onClickTypeSort: () => void;
};

export const sort: SortState[] = [
  { name: 'самые популярные', sortType: SortProporties.RATING_DESC },

  { name: 'самые дешевые', sortType: SortProporties.PRICE_ASC },
  { name: 'самые дорогие', sortType: SortProporties.PRICE_DESC },

  { name: 'по алфавиту от А до Я', sortType: SortProporties.TITLE_ASC },
  { name: 'по алфавиту от Я до А', sortType: SortProporties.TITLE_DESC },
];

export const Sort: React.FC<SortProps> = React.memo(
  ({ activeSort, onChooseSort, openSort, onClickTypeSort }) => {
    const sortName = activeSort.name;
    const sortBlock = useRef<HTMLDivElement>(null);
    useEffect(() => {
      document.body.addEventListener('click', (event) => {
        if (
          sortBlock.current &&
          !event.composedPath().includes(sortBlock.current) &&
          openSort === true
        ) {
          onClickTypeSort();
        }
      });
    });

    return (
      <div ref={sortBlock} className="sort">
        <div className="sort__label">
          <div className="sort__wrap">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортировка по:</b>
          </div>
          <span onClick={() => onClickTypeSort()}>{sortName}</span>
        </div>
        {openSort && (
          <div className="sort__popup">
            <ul>
              {sort.map((obj) => {
                return (
                  <li
                    key={obj.name}
                    onClick={() => onChooseSort(obj)}
                    className={activeSort.name === obj.name ? 'active' : ''}>
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  },
);
