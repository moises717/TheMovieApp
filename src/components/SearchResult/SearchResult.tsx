import { useSearch } from "../../hooks/useSearch"
import { Spinner } from "../Spinner/Spinner"


interface Props {
    searchQuery: string
}

export const SearchResult = ({ searchQuery }: Props) => {
    const { loading, searchResult, setOpenPreview } = useSearch(searchQuery);

    return (
        <div className="flex flex-wrap justify-center  gap-4 mt-7 mb-7">
            {searchResult!?.total_pages === 0 && <h1 className="text-secondary text-lg font-bold">No hay resultados</h1>}
            {
                loading ? <Spinner height="h-96" />
                    :
                    searchResult?.results?.map((item) => (

                        <div className=" hover:shadow-secondary mt-11 bg-primary w-auto h-auto rounded-3xl border border-gray-200 shadow-md" key={item.id}>
                            <a className="cursor-pointer" onClick={() => setOpenPreview(item)}>
                                <img className="rounded-3xl w-72 h-96 sm:w-52 sm:h-80   object-cover" src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="" />
                            </a>
                        </div>

                    ))
            }

        </div>
    )
}
