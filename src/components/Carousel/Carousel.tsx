import { ReactElement, useContext } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/skyblue';
import { MoviesContext } from '../../context/MoviesContext';
import { TheMovieDbResponse } from '../../interfaces/TheMovieDbResponse';

interface CarouselProps {
    children: ReactElement | ReactElement[],
    title: string
}

interface CarouselImageProps {
    movie: TheMovieDbResponse
}

const Carousel = ({ children, title }: CarouselProps) => {
    return (
        <div className="mt-8 z-0">
            <h2 className='text-secondary font-bold mb-3 text-xl'>{title}</h2>
            <Splide aria-label="The movie db list" options={{
                gap: '10px',
                padding: 10,
                perPage: 4,
                rewind: true,
                breakpoints: {
                    500: {
                        perPage: 2
                    },
                }
            }}
            >

                {children}
            </Splide>
        </div >
    )
}

export const CarouselImage = ({ movie }: CarouselImageProps) => {
    const { setHomeMoviePreview, setIsOpenPreviewCard, loading } = useContext(MoviesContext);

    const setInfoCard = () => {
        setHomeMoviePreview(movie);
        setIsOpenPreviewCard(true);
    }

    return (
        <SplideSlide onClick={setInfoCard}
        >
            <img loading='lazy' className="rounded-lg hover:shadow-md hover:shadow-secondary cursor-pointer hover:drop-shadow transition-all ease-in z-0" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        </SplideSlide>
    )
}

Carousel.CarouselImage = CarouselImage;

export default Carousel