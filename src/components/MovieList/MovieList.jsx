import {  useLocation } from "react-router-dom";
import { FilmItem , FilmList} from "./MovieList.styled";



const MovieList = ({ movies }) => {
    const location =useLocation()
    return < FilmList>
        {movies && movies.map(({id,title}) => <li key={id}> 
        <FilmItem to={`/movies/${id}`} state={{from:location}}>{title}</FilmItem></li>)}
           </FilmList> 
    
};
export default MovieList;