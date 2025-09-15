import ReactPaginate from 'react-paginate';
import css from './reactPaginate.module.css';

interface ReactPaginateProps {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedPage: number) => void;
}

function Paginate({ pageCount, forcePage, onPageChange }: ReactPaginateProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={forcePage}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel=">"
      previousLabel="<"
      renderOnZeroPageCount={null}
      previousClassName={css.previous}
      nextClassName={css.next}
      disabledClassName={css.disabled}
    />
  );
}

export default Paginate;
