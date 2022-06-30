import { useEffect, useState } from 'react';
import { ReviewsMovie } from 'service/Api';
import { useParams } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Audio } from 'react-loader-spinner';
import { ReviewList, Review, Name, Text } from './Reviews.styled';

export const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    ReviewsMovie(movieId).then(({ results }) => {
      setMovies(results);
      setLoader(false);
    });
  }, [movieId]);

  return (
    <ReviewList>
      {loader && (
        <Audio height="100" width="100" color="grey" ariaLabel="loading" />
      )}
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
