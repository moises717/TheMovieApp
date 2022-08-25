

export const SearchForm = () => {
    return (
        <form>
            <label htmlFor="search" className="text-white font-bold">Buscar película</label>
            <input id="search" className="mb-3 mt-3 w-full rounded-md h-8 focus:outline-none focus:bg-primary pl-4 bg-primary text-secondary border-secondary border-solid" />
        </form>
    )
}
