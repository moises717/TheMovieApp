import { useMovies } from "@hooks/useMovies";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Carousel from "../Carousel/Carousel"

export const Estrenos = () => {
    const { nowPlayingMovies } = useContext(MoviesContext);

    return (
        <Carousel title="Estrenos">
            {
                nowPlayingMovies?.map((item) => (
                    <Carousel.CarouselImage key={item.id} movie={item} />
                ))
            }
        </Carousel>
    )
}
