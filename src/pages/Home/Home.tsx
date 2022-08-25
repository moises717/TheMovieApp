import { Populares } from "@components/Populares/Populares"
import { Estrenos } from "@components/Estrenos/Estrenos"

export const Home = () => {
    return (
        <div className="text-white h-screen">
            <div className="mt-5 flex flex-col justify-center items-center">
                <Populares />
                <Estrenos />
            </div>
        </div>
    )
}
