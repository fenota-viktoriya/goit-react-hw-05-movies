import { useState ,useEffect} from "react";
import { SearchMovie } from "service/Api";
import { useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";



const MoviePage = () => { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    console.log(query)

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (query==='' && !searchParams ) return;
        SearchMovie(query).then(data => { setMovies(data.results);});
    },[searchParams, query])

    const onSubmitForm = e => {
        e.preventDefault();
        const form = e.target;
        const q = form.search.value;
        setSearchParams({ query: q });
        setQuery(q);
        form.reset()
    }
    return <>
   <form onSubmit={onSubmitForm}>
       <input type="search" name='search' />
       <button type="submit">search</button>
   </form>
      <MovieList movies={movies}/>  
    </>

 };
export default MoviePage;