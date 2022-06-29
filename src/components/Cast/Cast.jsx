import { useEffect, useState } from "react";
import {CreditsMovie} from '../../service/Api'
import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();
    const [ movies, setMovies ] = useState([]);
    useEffect(() => {
        CreditsMovie(movieId).then(data=> setMovies(data.cast));
    }, [movieId])
    
    return <div>
        <ul>{ movies.map(({profile_path, character, name, id})=> <li key={id}><img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
            <p> Name: {name }</p>  <p> Character: { character}</p> </li>)}</ul>
        </div>
};
export default Cast;