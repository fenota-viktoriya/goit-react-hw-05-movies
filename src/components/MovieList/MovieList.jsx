import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FilmItem, FilmList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
 
  return (
    <FilmList>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <FilmItem to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </FilmItem>
          </li>
        ))}
    </FilmList>
  );
};
MovieList.propTypes = {
  movies: PropTypes.array,
};
