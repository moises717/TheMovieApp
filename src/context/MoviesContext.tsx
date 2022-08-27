import { createContext } from 'react';

interface ContextProps { }

export const MoviesContext = createContext({} as ContextProps);

export const MoviesProvider = ({ children }: any) => {
    return (
        <MoviesContext.Provider value={{}}>
            {children}
        </MoviesContext.Provider>
    )
};
