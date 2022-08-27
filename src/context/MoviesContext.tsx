import { createContext, useEffect, useState } from 'react';
import { useMovies } from '@hooks/useMovies';
import { TheMovieDbResponse } from '../interfaces/TheMovieDbResponse';

interface ContextProps {
    homeMoviePreview: TheMovieDbResponse | undefined,
    setHomeMoviePreview: (movie: TheMovieDbResponse) => void
    loading: boolean,
    isOpenPreviewCard: boolean | undefined,
    setIsOpenPreviewCard: (isOpen: boolean) => void,
    popularMovies: TheMovieDbResponse[]
    nowPlayingMovies: TheMovieDbResponse[]
    upcomingMovies: TheMovieDbResponse[]

}

export const MoviesContext = createContext({} as ContextProps);

export const MoviesProvider = ({ children }: any) => {
    const { popularMovies, nowPlayingMovies, upcomingMovies, loading } = useMovies();
    const [homeMoviePreview, setHomeMoviePreview] = useState<TheMovieDbResponse>();
    const [isOpenPreviewCard, setIsOpenPreviewCard] = useState<boolean>();

    const generateRandomNumber = (max: number) => {
        return Math.floor(Math.random() * max) + 1;
    }

    useEffect(() => {
        if (popularMovies.length > 0) {
            setHomeMoviePreview(popularMovies[generateRandomNumber(popularMovies.length)]);
        }
    }, [popularMovies])


    return (
        <MoviesContext.Provider value={{ homeMoviePreview, nowPlayingMovies, popularMovies, upcomingMovies, isOpenPreviewCard, setHomeMoviePreview, setIsOpenPreviewCard, loading }}>
            {children}
        </MoviesContext.Provider>
    )
};
