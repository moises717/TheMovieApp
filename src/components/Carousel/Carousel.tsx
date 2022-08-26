import { useState, useEffect, useRef, ReactElement } from 'react';

interface CarouselProps {
    children: ReactElement | ReactElement[]
    title: string
}

interface CarouselImageProps {
    image: string,
    alt: string,
    onClick?: () => void
}

const Carousel = ({ children, title }: CarouselProps) => {
    const carousel = useRef<HTMLDivElement>(null);

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, [currentIndex]);
    return (
        <div className="carousel mt-20 w-full h-carousel-xl">
            <h2 className="text-secondary text-2xl leading-8 font-semibold mb-5 text-slate-700">
                {title}
            </h2>
            <div className="relative overflow-hidden">
                <button
                    onClick={movePrev}
                    className="hover:bg-primary rounded-l-lg absolute text-white w-10 h-full text-center opacity-75 hover:opacity-80 disabled:opacity-25 disabled:cursor-not-allowed z-100 p-0 m-0 transition-all ease-in-out duration-300"

                >
                    <i className='fa fa-angle-left text-4xl text-secondary'></i>
                    <span className="sr-only">Prev</span>
                </button>

                <button onClick={moveNext} className="hover:bg-primary rounded-r-lg absolute right-0 text-white w-10 h-full text-center opacity-75 hover:opacity-80 disabled:opacity-25 disabled:cursor-not-allowed z-100 p-0 m-0 transition-all ease-in-out duration-300"

                >
                    <i className='fa fa-angle-right text-4xl text-secondary'></i>
                    <span className="sr-only">Next</span>
                </button>

                <div
                    ref={carousel}
                    className="overflow-x-hidden flex gap-4 scroll-smooth rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const CarouselImage = ({ image, alt, onClick }: CarouselImageProps) => {
    return (
        <img className="rounded-lg cursor-pointer object-cover md:w-carousel md:h-carousel transition-all ease-in w-carousel-lg h-carousel-lg hover:w-carousel-xl hover:h-carousel-xl" src={`https://image.tmdb.org/t/p/w200/${image}`} alt={alt} onClick={onClick} />
    )
}

Carousel.CarouselImage = CarouselImage;

export default Carousel