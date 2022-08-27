import {useEffect, useState} from 'react';
import {getMovies} from '@services/theMovieDbApi';
import {TheMovieDbResponse} from '../interfaces/TheMovieDbResponse';

export const useMovies = () => {
	const [popularMovies, setPopularMovies] = useState<TheMovieDbResponse[]>([]);
	const [upcomingMovies, setUpcomingMovies] = useState<TheMovieDbResponse[]>([]);
	const [nowPlayingMovies, setNowPlatingMovies] = useState<TheMovieDbResponse[]>([]);

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);
		Promise.all([getMovies('popular'), getMovies('now_playing'), getMovies('upcoming')]).then((res) => {
			setPopularMovies(res[0].results);
			setNowPlatingMovies(res[1].results);
			setUpcomingMovies(res[2].results);
			setLoading(false);
		});
	}, []);

	return {
		popularMovies,
		nowPlayingMovies,
		upcomingMovies,
		loading,
	};
};
