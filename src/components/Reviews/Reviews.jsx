import { useEffect, useState } from 'react';
import { ReviewsMovie } from 'service/Api';
import { useParams } from 'react-router-dom';
import { ReviewList, Review, Name, Text } from './Reviews.styled';

export const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ReviewsMovie(movieId).then(({ results }) => {
      setMovies(results);
    });
  }, [movieId]);

  return (
    <ReviewList>
      {movies.length === 0 && <h1>no reviews</h1>}
      {movies.map(({ author, content, id }) => (
        <Review key={id}>
          <Name>Author: {author}</Name>
          <h3>Review:</h3>
          <Text>{content}</Text>
        </Review>
      ))}
    </ReviewList>
  );
};
