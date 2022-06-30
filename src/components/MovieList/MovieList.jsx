import {  useLocation } from "react-router-dom";
import { FilmItem } from "./MovieList.styled";
import { List } from "pages/Pages.styled";


const MovieList = ({ movies }) => {
    const location =useLocation()
    return <List>
        {movies && movies.map(({id,title}) => <li key={id}> 
        <FilmItem to={`/movies/${id}`} state={{from:location}}>{title}</FilmItem></li>)}
           </List> 
    
};
export default MovieList;