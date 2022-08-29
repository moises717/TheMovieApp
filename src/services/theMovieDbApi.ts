import {API_KEY, API_URL} from '../constants';
import {MovieDbResult} from '../interfaces/TheMovieDbResponse';
import {customFetch} from '../utils';

export const getMovies = (genre: string) => {
	return customFetch<MovieDbResult>({url: `${API_URL}/movie/${genre}?api_key=${API_KEY}`});
};

export const searchMovie = ({query}: {query: string}) => {
	return customFetch<MovieDbResult>({url: `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`});
};
