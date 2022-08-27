import { useMovies } from "@hooks/useMovies";
import Carousel from "../Carousel/Carousel";


export const Populares = () => {
    const { movies } = useMovies({ category: 'popular' });

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
