import { useState, useEffect, useRef } from 'react';

export const Populares = () => {
    const carousel = useRef<HTMLDivElement>(null);
    const swipeRef = useRef<HTMLDivElement>(null);


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

    const isDisabled = (direction: string) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }
        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
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
        <div className="carousel my-12 mx-auto">
            <h2 className="text-secondary text-2xl leading-8 font-semibold mb-5 text-slate-700">
                Populares
            </h2>
            <div className="relative overflow-hidden">
                <div className="flex justify-between absolute top left w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-primary text-white w-10 h-full text-center opacity-75 hover:opacity-80 disabled:opacity-25 disabled:cursor-not-allowed z-100 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <i className='fa fa-angle-left text-4xl'></i>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button onClick={moveNext} className="hover:bg-primary text-white w-10 h-full text-center opacity-75 hover:opacity-80 disabled:opacity-25 disabled:cursor-not-allowed z-100 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <i className='fa fa-angle-right text-4xl'></i>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container flex gap-7 items-center overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 rounded-lg">
                    <div className='min-w-fit max-h-80 rounded-lg shadow-2xl'>
                        <img className="rounded-lg object-cover" src="https://www.themoviedb.org/t/p/w220_and_h330_face/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg" alt="" />
                    </div>
                    <div className='min-w-fit max-h-80 rounded-lg shadow-2xl'>
                        <img className="rounded-lg object-cover" src="https://www.themoviedb.org/t/p/w220_and_h330_face/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg" alt="" />
                    </div>
                    <div className='min-w-fit max-h-80 rounded-lg shadow-2xl'>
                        <img className="rounded-lg object-cover" src="https://www.themoviedb.org/t/p/w220_and_h330_face/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
