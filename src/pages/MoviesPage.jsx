import { useState ,useEffect, } from "react";
import { SearchMovie } from "service/Api";
import { useSearchParams } from "react-router-dom";
import MovieList from "components/MovieList";



export const MoviePage = () => { 

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const curentPos= searchParams.get("query");

    useEffect(() => {
        if (!curentPos) return;
        console.log(curentPos)
            SearchMovie(curentPos).then(data => {setMovies(data)});   
    },[curentPos, searchParams])
    

    const onSubmitForm = e => {
        e.preventDefault();
        setSearchParams({ query:query }) 
    }
    return <>
   <form onSubmit={onSubmitForm}>
            <input type="search" name={query} onChange={e=> setQuery(e.target.value)} />          
       <button type="submit">search</button>
   </form>
      <MovieList movies={movies}/>  
    </>

 };
