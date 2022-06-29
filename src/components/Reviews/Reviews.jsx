import { useEffect, useState } from "react";
import { ReviewsMovie } from "service/Api";
import { useParams} from 'react-router-dom';

const Reviews = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        ReviewsMovie(movieId).then(({ results }) => {setMovies(results) });
    },[movieId])

    return <p>{movies.map(it=> it.content)}</p>
}
export default Reviews;