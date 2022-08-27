import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Carousel from "../Carousel/Carousel";


export const Populares = () => {
    const { popularMovies } = useContext(MoviesContext);

    return (
        <Carousel title="Populares">
            {
                popularMovies.map((item) => (
                    <Carousel.CarouselImage movie={item} key={item.id} />
                ))
            }
        </Carousel>
    )
}
