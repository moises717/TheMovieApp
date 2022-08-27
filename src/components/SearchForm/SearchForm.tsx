

export const SearchForm = () => {
    return (
        <form>
            <label htmlFor="search" className="text-white font-bold text-lg">Buscar película</label>
            <input id="search" className="w-full rounded-md h-11 focus:outline-none focus:bg-primary pl-4 mt-2 bg-primary text-secondary border-secondary border-solid" />
        </form>
    )
}
