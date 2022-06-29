import { useEffect, useState } from "react";
import { DetailsMovies } from '../../service/Api'
import { getGenres } from "service/getGenres";
import BackLink from "components/BackLink/BackLink";

const MovieDetails = ({movieId}) => {
    const [movie, setMovie] = useState([]);
    const { title, poster_path, popularity, overview, genres } = movie;

    useEffect(() => {
        DetailsMovies(movieId).then(data => setMovie(data))
    }, [movieId]);

    return <div>
        <h1>{title}</h1>
        <BackLink/>
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
        <p>User score: {Math.floor(popularity) }%</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Ganres: {getGenres(genres)}</p>
        </div>
};
export default MovieDetails;