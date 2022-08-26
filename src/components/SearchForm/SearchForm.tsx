

export const SearchForm = () => {
    return (
        <form>
            <label htmlFor="search" className="text-white font-bold">Buscar película</label>
            <input id="search" className="w-full rounded-md h-11 focus:outline-none focus:bg-primary pl-4 mt-5 bg-primary text-secondary border-secondary border-solid" />
        </form>
    )
}
