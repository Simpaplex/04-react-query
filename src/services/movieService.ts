import axios from "axios";
import type { Movie } from "../types/movie";



const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const myToken = import.meta.env.VITE_TMDB_TOKEN;

interface MoviesResponce{
    results: Movie[];
  }

async function fetchMovies(searchValue: string):Promise<Movie[]> {
  const responce = await axios.get<MoviesResponce>(BASE_URL, {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
    params: {
      query: searchValue,
    }
  });
  return responce.data.results;
};

export default fetchMovies;

