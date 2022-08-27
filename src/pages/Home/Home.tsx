import { Populares } from "@components/Populares/Populares"
import { Estrenos } from "@components/Estrenos/Estrenos"
import { Upcoming } from "../../components/Upcoming/Upcoming"

export const Home = () => {
    return (
        <div className="text-white">
            <div className="flex flex-col justify-center items-center mb-5">
                <Upcoming />
                <Populares />
                <Estrenos />
            </div>
        </div>
    )
}
