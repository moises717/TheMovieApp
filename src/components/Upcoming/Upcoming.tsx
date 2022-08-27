import { useMovies } from "@hooks/useMovies";
import Carousel from "../Carousel/Carousel";


export const Upcoming = () => {
    const { movies } = useMovies({ category: 'upcoming' });

    return (
        <Carousel title="Próximamente">
            {
                movies.map((item) => (
                    <Carousel.CarouselImage alt={item.title} image={item.poster_path} key={item.id} />
                ))
            }
        </Carousel>
    )
}
