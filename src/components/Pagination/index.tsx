import styles from './Pagination.module.scss';

type PaginationProps = {
  paginations: { title: string }[];
  onClickPagination: (page: number) => void;
};
export const Pagination: React.FC<PaginationProps> = ({ paginations, onClickPagination }) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.content}>
        <ul className={styles.list}>
          {[...Array(3)].map((item, i) => (
            <li key={i} onClick={() => onClickPagination(i + 1)} className={styles.item}>
              <span>{i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
