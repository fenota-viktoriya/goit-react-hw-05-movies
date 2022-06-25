import { TreandingMovies} from "service/Api";
import { useEffect, useState } from "react";

import MovieList from "components/MovieList";

const HomePage = () => {   
     const [movies, setMovies] = useState(null);

    useEffect(() => {
        TreandingMovies().then(data => setMovies(data.results));
    }, []);  
    return (<>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
    </> )
};
export default HomePage;