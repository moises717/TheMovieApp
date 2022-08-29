import { Route } from "wouter"

import { NestedRoutes } from '@router/NestedRoutes';
import { Home } from "@pages/Home/Home"
import { SearchResult } from "@components/SearchResult/SearchResult";
import { SearchForm } from "@components/SearchForm/SearchForm";
import { HomePreviewCard } from "@components/MovieHomePreview/HomePreviewCard";

export const AppRouter = () => {

    return (
        <NestedRoutes base="/">
            <div className="flex gap-7">
                <div className="flex flex-col w-full">
                    <SearchForm />
                    <Route path="/" component={Home} />
                    <Route path="search/:name" >
                        {(params) => <SearchResult searchQuery={params.name} />}
                    </Route>
                </div>
                <HomePreviewCard />
            </div>
        </NestedRoutes>

    )
}




