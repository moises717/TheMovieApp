import { ReactElement } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css/skyblue';

interface CarouselProps {
    children: ReactElement | ReactElement[],
    title: string
}

interface CarouselImageProps {
    image: string,
    alt: string,
    onClick?: () => void
}

const Carousel = ({ children, title }: CarouselProps) => {
    return (
        <div className="mt-8">
            <h2 className='text-secondary font-bold mb-3 text-xl'>{title}</h2>
            <Splide aria-label="The movie db list" options={{
                gap: '10px',
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

export const CarouselImage = ({ image, alt, onClick }: CarouselImageProps) => {
    return (
        <SplideSlide onClick={onClick}
        >
            <img className="rounded-lg hover:shadow-md hover:shadow-secondary cursor-pointer hover:drop-shadow transition-all ease-in" src={`https://image.tmdb.org/t/p/w200/${image}`} alt={alt} />
        </SplideSlide>
    )
}

Carousel.CarouselImage = CarouselImage;

export default Carousel