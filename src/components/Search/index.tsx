import styles from './Search.module.scss';

import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { getFilter } from '../../redux/filter/selectors';
import { setSearchValue } from '../../redux/filter/slice';

export const Search: React.FC = () => {
  const focusOnRef = useRef<HTMLInputElement>(null);
  const { searchValue } = useSelector(getFilter);
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(setSearchValue(''));
    focusOnRef.current?.focus();
  };
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <svg
          onClick={() => focusOnRef.current?.focus()}
          className={styles.icon}
          enableBackground="new 0 0 32 32"
          id="EditableLine"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="14"
            cy="14"
            fill="none"
            id="XMLID_42_"
            r="9"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            id="XMLID_44_"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
          />
        </svg>
        <input
          ref={focusOnRef}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          value={searchValue}
          className={styles.input}
          placeholder="Поиск пиццы..."
        />
        {searchValue ? (
          <svg
            onClick={() => onClickRemove()}
            className={styles.clearIcon}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
