import { useEffect, useState } from "react";
import { DetailsMovies } from '../../service/Api'
import { getGenres } from "service/getGenres";
import BackLink from "components/BackLink/BackLink";

const MovieDetails = ({movieId}) => {

 
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        DetailsMovies(movieId).then(data => setMovie(data))
    }, [movieId])
    return <div><h1>{movie.title}</h1>
        <BackLink/>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <p>User score: {Math.floor(movie.popularity) }%</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Ganres: {getGenres(movie.genres)}</p>
        </div>
};
export default MovieDetails;