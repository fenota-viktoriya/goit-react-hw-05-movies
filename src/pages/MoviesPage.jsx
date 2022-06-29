import { useState ,useEffect, } from "react";
import { SearchMovie } from "service/Api";
import { useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';
import MovieList from "components/MovieList";



export const MoviePage = () => { 

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const curentPos= searchParams.get("query");

    useEffect(() => {
        if (!curentPos) return;
        SearchMovie(curentPos).then(data => { if (data.length === 0) { toast.error('нет таких'); return} setMovies(data)});   
    },[curentPos])
    

    const onSubmitForm = e => {
        e.preventDefault();
         if (query.trim() === '') {
   toast.error('введите значение ')
      return;
         }
        setSearchParams({ query: query }) 
    }
    const handelInputChange = e => {
        const text = e.currentTarget.value.toLowerCase();
        setQuery(text);
    }

    return <>
   <form onSubmit={onSubmitForm}>
            <input type="search" name={query} onChange={ handelInputChange} />          
       <button type="submit">search</button>
   </form>
      <MovieList movies={movies}/>  
    </>

 };
