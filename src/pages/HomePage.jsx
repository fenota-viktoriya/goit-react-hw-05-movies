import { TreandingMovies} from "service/Api";
import { useEffect, useState } from "react";

import MovieList from "components/MovieList";

export const HomePage = () => {   
     const [movies, setMovies] = useState(null);

    useEffect(() => {
        TreandingMovies().then(setMovies);
    },[]);  
    return (<>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
    </> )
};
