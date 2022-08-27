import { useEffect, useState } from "react";
import { TheMovieDbResponse } from "../../interfaces/TheMovieDbResponse";
import { getMovies } from "../../services/theMovieDbApi";
import Carousel from "../Carousel/Carousel";


export const Populares = () => {
    const [movies, setMovies] = useState<TheMovieDbResponse[]>([])

    useEffect(() => {
        getMovies('popular').then(({ results }) => {
            setMovies(results)
        })
    }, [])


    return (

        <Carousel title="Populares">
            {
                movies.map((item) => (
                    <Carousel.CarouselImage alt={item.title} image={item.poster_path} key={item.id} />
                ))
            }
        </Carousel>
    )
}
