import { useMovies } from "@hooks/useMovies";
import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Carousel from "../Carousel/Carousel";


export const Upcoming = () => {
    const { upcomingMovies } = useContext(MoviesContext);

    return (
        <Carousel title="Próximamente">
            {
                upcomingMovies?.map((item) => (
                    <Carousel.CarouselImage movie={item} key={item.id} />
                ))
            }
        </Carousel>
    )
}
