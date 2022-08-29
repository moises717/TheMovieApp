import {useContext, useEffect, useState} from 'react';
import {MoviesContext} from '../context/MoviesContext';
import {searchMovie} from '@services/theMovieDbApi';
import {MovieDbResult, TheMovieDbResponse} from '../interfaces/TheMovieDbResponse';

export const useSearch = (searchQuery: string) => {
	const [searchResult, setSearchResult] = useState<MovieDbResult>();
	const [loading, setLoading] = useState<boolean>(false);
	const {setHomeMoviePreview, setIsOpenPreviewCard} = useContext(MoviesContext);

	useEffect(() => {
		setLoading(true);
		searchMovie({query: searchQuery}).then((res) => {
			setSearchResult(res);
			setLoading(false);
		});
	}, [searchQuery]);

	const setOpenPreview = (item: TheMovieDbResponse) => {
		setHomeMoviePreview(item);
		setIsOpenPreviewCard(true);
	};

	return {
		searchResult,
		loading,
		setOpenPreview,
	};
};
