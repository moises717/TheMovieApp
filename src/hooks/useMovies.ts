import {useEffect, useState} from 'react';
import {getMovies} from '@services/theMovieDbApi';
import {TheMovieDbResponse} from '../interfaces/TheMovieDbResponse';

type mediaCategory = 'movie' | 'tv' | 'network' | 'people' | 'review';

interface useMovies {
	media?: mediaCategory;
	category: string;
}

export const useMovies = ({category}: useMovies) => {
	const [movies, setMovies] = useState<TheMovieDbResponse[]>([]);

	useEffect(() => {
		getMovies(category).then(({results}) => {
			setMovies(results);
		});
	}, []);

	return {
		movies,
	};
};
