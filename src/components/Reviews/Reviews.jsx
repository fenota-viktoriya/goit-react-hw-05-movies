import { useEffect, useState } from 'react';
import { ReviewsMovie } from 'service/Api';
import { useParams, useLocation } from 'react-router-dom';
import { ReviewList, Review, Name, Text } from './Reviews.styled';

export const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    ReviewsMovie(movieId)
      .then(({ results }) => {
        if (results) {
          return setMovies(results);
        }
      })
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ReviewList>
      {movies.length === 0 && <h1>no reviews</h1>}
      {movies.map(({ author, content, id }) => (
        <Review key={id} state={{ from: location }}>
          <Name>Author: {author}</Name>
          <h3>Review:</h3>
          <Text>{content}</Text>
        </Review>
      ))}
    </ReviewList>
  );
};
