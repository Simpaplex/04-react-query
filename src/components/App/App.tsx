import { useEffect, useState } from 'react';
import fetchMovies from '../../services/movieService';
import type { Movie } from '../../types/movie';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import MoveGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import Paginate from '../Paginate/Paginate';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [film, setFilm] = useState<Movie | null>(null);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setCurrentPage(1);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies', searchValue, currentPage],
    queryFn: () => fetchMovies(searchValue, currentPage),
    enabled: Boolean(searchValue),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data && data.results.length === 0) {
      toast.error('No movies found for your request.');
    }
  }, [data]);

  function handleSelect(movie: Movie) {
    setFilm(movie);
  }

  function handleModalClose() {
    setFilm(null);
  }

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {data && data.total_pages > 1 && (
        <Paginate
          totalPages={data.total_pages}
          page={currentPage}
          setPage={setCurrentPage}
        />
      )}
      {data && data.results.length > 0 && (
        <MoveGrid movies={data.results} onSelect={handleSelect} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Toaster />
      {film && <MovieModal movie={film} onClose={handleModalClose} />}
    </div>
  );
}

export default App;
