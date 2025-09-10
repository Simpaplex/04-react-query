import { useState } from 'react';
import fetchMovies from '../../services/movieService';
import type { Movie } from '../../types/movie';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';
import MoveGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [film, setFilm] = useState<Movie | null>(null);

  async function handleSearch (searchValue: string) {
    try {
      setError(false);
      setIsLoading(true);
      const newMovies = await fetchMovies(searchValue);
      if (newMovies.length === 0) {
        toast.error('No movies found for your request.');
      }
      setMovies(newMovies);
            
      } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  function handleSelect (movie: Movie) {
    setFilm(movie);
  };

  function handleModalClose () {
    setFilm(null);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && (
        <MoveGrid movies={movies} onSelect={handleSelect} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <Toaster />
      {film && (
        <MovieModal movie={film} onClose={handleModalClose} />
      )}
    </div>
  );
}

export default App;
