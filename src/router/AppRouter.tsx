import { Route } from "wouter"
import { NestedRoutes } from '@router/NestedRoutes';
import { Home } from "@pages/Home/Home"
import { SearchResult } from "@components/SearchResult/SearchResult";
import { SearchForm } from "../components/SearchForm/SearchForm";

export const AppRouter = () => {
    return (
        <NestedRoutes base="/">
            <div className="mt-3 gap-8 flex h-screen">
                <div className="w-full flex flex-col ">
                    <SearchForm />
                    <Route path="/" component={Home} />
                    <Route path="search/:name" component={SearchResult} />
                </div>
                <div className="sticky top-2 bg-primary w-card h-card rounded-lg md:hidden">
                    <img className="object-cover rounded-lg" src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/25mOXMp1XGPl2riWwi3JMlGLUFs.jpg" alt="" />
                    <div className="text-white ml-5 mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias error soluta corrupti voluptates reprehenderit voluptate autem perspiciatis, veritatis accusamus ipsa veniam ut. Tempore enim, nihil excepturi quasi minima itaque!
                    </div>
                </div>
            </div>
        </NestedRoutes>

    )
}




