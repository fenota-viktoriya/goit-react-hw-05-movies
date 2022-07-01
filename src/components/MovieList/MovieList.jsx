import PropTypes from 'prop-types';
import { FilmItem, FilmList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <FilmList>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <FilmItem to={`/movies/${id}`}>{title}</FilmItem>
          </li>
        ))}
    </FilmList>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
