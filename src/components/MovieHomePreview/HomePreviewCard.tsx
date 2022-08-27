import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import { Spinner } from "../Spinner/Spinner";

export const HomePreviewCard = () => {
    const { loading, homeMoviePreview, isOpenPreviewCard, setIsOpenPreviewCard } = useContext(MoviesContext);

    return (
        <>
            <div className={`${isOpenPreviewCard ? 'bg-primary rounded-lg h-card w-card sticky md:fixed top-4 md:top-auto md:-bottom-96 md:w-full md:left-0 rounded-t-lg slide-top' : 'bg-primary rounded-lg h-card w-card sticky top-4 md:hidden'}`}>
                {
                    !loading ? <>
                        <img className="object-cover rounded-lg w-full" src={`https://image.tmdb.org/t/p/w500/${homeMoviePreview?.backdrop_path}`} alt="" />
                        <div className="text-white ml-5 mt-5">
                            <h3 className="text-secondary font-bold mb-3">{homeMoviePreview?.title}</h3>
                            <p className="text-gray line-clamp-6"> {homeMoviePreview?.overview}</p>
                        </div>
                    </> : <Spinner height="h-96" />
                }
            </div>
            {
                isOpenPreviewCard && <div className="md:fixed md:top-0 md:bg-transparent left-0 md:h-[calc(100%-500px)] md:w-full" onClick={() => setIsOpenPreviewCard(false)}></div>
            }
        </>
    )
}
