import MovieDetails from "components/MovieDetails";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
    const {movieId}=useParams()
    return <MovieDetails movieId={movieId} />
};
export default MovieDetailsPage;