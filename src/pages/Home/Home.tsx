import { useContext } from "react"

import { Populares } from "@components/Populares/Populares"
import { Estrenos } from "@components/Estrenos/Estrenos"
import { Upcoming } from "../../components/Upcoming/Upcoming"
import { MoviesContext } from "../../context/MoviesContext"
import { Spinner } from "@components/Spinner/Spinner"

export const Home = () => {
    const { loading } = useContext(MoviesContext);
    return (
        <div className="text-white z-0">
            <div className="flex flex-col justify-center items-center mb-10">
                {
                    !loading ? <>
                        <Upcoming />
                        <Populares />
                        <Estrenos /> </>
                        : <Spinner />
                }
            </div>
        </div >
    )
}
