import { Link , } from "react-router-dom";

const MovieList = ({movies}) => {
    return <ul>
        {movies && movies.map(movi => <li key={movi.id}> 
        <Link to={`/movies/${movi.id}`}>{movi.title}</Link></li>)}
           </ul> 
    
};
export default MovieList;