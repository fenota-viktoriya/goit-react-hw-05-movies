import { useEffect, useState } from "react";
import { DetailsMovies } from '../../service/Api'
import { getGenres } from "service/getGenres";
import BackLink from "components/BackLink/BackLink";
import { Image, Section,ListWrapper } from "./MovieDetails.styled";


const MovieDetails = ({movieId}) => {
    const [movie, setMovie] = useState([]);
    const { title, poster_path, popularity, overview, genres } = movie;

    useEffect(() => {
        DetailsMovies(movieId).then(data => setMovie(data))
    }, [movieId]);

    return <> <BackLink />
        <Section>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <ListWrapper>
        <h1>{title}</h1>
                <p>User score:</p>
                <p> {Math.floor(popularity)}%</p>
                <p>Overview: </p>
                <p>{overview}</p>
                <p>Ganres:</p>
                <p> {getGenres(genres)}</p>
            </ListWrapper>
        </Section>
    </>
};
export default MovieDetails;