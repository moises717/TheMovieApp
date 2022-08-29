import { KeyboardEvent } from "react";
import { useLocation } from "wouter"

export const SearchForm = () => {
    const [_, setLocation] = useLocation();

    const search = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        setLocation(`search/${e.currentTarget.value}`)
    }

    return (
        <div className="flex">
            <div className="w-24 flex justify-center items-center mt-4 cursor-pointer" onClick={() => setLocation('')}>
                <i className="fa-solid fa-play text-secondary text-6xl"></i>
            </div>
            <div className="w-full">
                <label htmlFor="search" className="text-white font-bold text-lg">Buscar película</label>
                <input id="search" className="w-full rounded-md h-11 focus:outline-none focus:bg-primary pl-4 mt-2 bg-primary text-secondary border-secondary border-solid" onKeyDown={search} />
            </div>
        </div>
    )
}
