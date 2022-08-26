import {API_URL} from '../constants';
import {MovieDbResult} from '../interfaces/TheMovieDbResponse';
import {customFetch} from '../utils';

export const getMovies = (genre: string) => {
	return customFetch<MovieDbResult>({url: `${API_URL}/movie/${genre}`});
};
