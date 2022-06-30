import MovieDetails from "components/MovieDetails";
import { useParams, Outlet } from "react-router-dom";
import { Links, List } from "./Pages.styled";



 export const MovieDetailsPage = () => {
    const {movieId}=useParams()
    return <> <MovieDetails movieId={movieId} />
        <List>
            <li> <Links to='cast'>Cast</Links></li>
            <li> <Links to='reviews'> Reviews</Links></li>
        </List>    
        <Outlet />
    </>

};
