import { useEffect, useState } from "react";
import { ReviewsMovie } from "service/Api";
import { useParams} from 'react-router-dom';

const Reviews = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        ReviewsMovie(movieId).then(({ results }) => {setMovies(results) });
    }, [movieId])
    
    console.log(movies)

    return <ul>
         {movies.length === 0 && <h1>no reviews</h1>}
        
        {movies.map(({ author, content, id }) => <li key={id}> <p>Author:{author}</p> <p>Review:{content}</p></li>)}</ul>
}
export default Reviews;