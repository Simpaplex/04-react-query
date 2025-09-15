import ReactPaginate from 'react-paginate';
import css from './paginate.module.css';

interface PaginateProps {
  totalPages: number;
  page: number;
  setPage: (selectedPage: number) => void;
}

function Paginate({ totalPages, page, setPage }: PaginateProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setPage(selected + 1)}
      forcePage={page - 1}
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
