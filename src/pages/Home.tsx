import { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router';

import {
  Categories,
  PizzaBlock,
  MyLoader,
  Pagination,
  NotFoundBlock,
  sort,
  Sort,
} from '../components';

import { useAppDispatch } from '../redux/store';
import { getFilter } from '../redux/filter/selectors';
import { setFilters, setActiveCategory, setActiveSort, setPage } from '../redux/filter/slice';
import { FilterParams, SortState } from '../redux/filter/types';
import { fetchPizzas } from '../redux/pizzas/asynkActions';
import { getPizzas } from '../redux/pizzas/selectors';

export const Home: React.FC = () => {
  const { activeCategory, activeSort, page, searchValue } = useSelector(getFilter);
  const { items, pizzaLoad } = useSelector(getPizzas);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [openSort, setOpenSort] = useState(false);
  let isMounted = useRef(false);

  const category = activeCategory > 0 ? `&category=${activeCategory}` : '';
  const sortedBy = activeSort.sortType.replace('-', '');
  const sortedParam = activeSort.sortType.includes('-') ? 'asc' : 'desc';

  const getFetchPizzas = () => {
    dispatch(
      fetchPizzas({
        category,
        sortedBy,
        sortedParam,
        page,
      }),
    );
  };

  useEffect(() => {
    if (window.location.search) {
      let urlAddress = qs.parse(window.location.search.substring(1)) as unknown as FilterParams;
      const sortObject = sort.find(
        (item) => urlAddress.sortType === item.sortType,
      ) as unknown as SortState;
      dispatch(setFilters({ ...urlAddress, sortObject }));
    }
  }, []);

  useEffect(() => {
    getFetchPizzas();
    window.scrollTo(0, 0);
  }, [activeCategory, activeSort, page]);

  useEffect(() => {
    if (isMounted.current) {
      const urlString = qs.stringify({
        sortType: activeSort.sortType,
        activeCategory,
        page,
      });
      navigate(`?${urlString}`);
    }
    isMounted.current = true;
  }, [activeCategory, activeSort, page]);

  const onChangeActiveCategory = useCallback((i: number) => {
    dispatch(setActiveCategory(i));
    dispatch(setPage(1));
  }, []);
  const onChooseSort = useCallback((type: SortState) => {
    dispatch(setActiveSort(type));
    setOpenSort(false);
  }, []);
  const onClickTypeSort = useCallback(() => {
    setOpenSort(!openSort);
  }, []);
  const onClickPagination = (i: number) => {
    dispatch(setPage(i));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onChangeActiveCategory={onChangeActiveCategory}
        />
        <Sort
          activeSort={activeSort}
          openSort={openSort}
          onChooseSort={onChooseSort}
          onClickTypeSort={onClickTypeSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaLoad === 'error' ? (
          <NotFoundBlock />
        ) : pizzaLoad === 'loading' ? (
          [...new Array(12)].map((_, index) => <MyLoader key={index} />)
        ) : (
          items
            .filter((item: { title: string }) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map(
              (item: {
                imageUrl: string;
                price: number;
                title: string;
                id: string;
                sizes: number[];
                types: number[];
              }) => <PizzaBlock key={item.title} {...item} />,
            )
        )}
      </div>
      <Pagination onClickPagination={(i: number) => onClickPagination(i)} paginations={items} />
    </div>
  );
};
