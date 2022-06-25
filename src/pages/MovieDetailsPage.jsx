import MovieDetails from "components/MovieDetails";
import { useParams,Link, Outlet } from "react-router-dom";


const MovieDetailsPage = () => {
    const {movieId}=useParams()
    return <> <MovieDetails movieId={movieId} />
        <ul>
            <li> <Link to='cast'>Cast</Link></li>
            <li> <Link to='reviews'> Reviews</Link></li>
        </ul>    
        <Outlet />
    </>

};
export default MovieDetailsPage;