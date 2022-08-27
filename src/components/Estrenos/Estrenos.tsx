import { useMovies } from "@hooks/useMovies";
import Carousel from "../Carousel/Carousel"

export const Estrenos = () => {
    const { movies } = useMovies({ category: 'now_playing' });

    return (
        <Carousel title="Estrenos">
            {
                movies?.map((item) => (
                    <Carousel.CarouselImage key={item.id} image={item.poster_path} alt={item.title} />
                ))
            }
        </Carousel>
    )
}
