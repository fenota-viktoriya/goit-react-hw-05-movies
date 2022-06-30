import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DetailsMovies } from '../../service/Api';
import { getGenres } from 'service/getGenres';
import { BackLink } from 'components/BackLink';
import {
  Image,
  Section,
  ListWrapper,
  TitleOption,
  TextOption,
} from './MovieDetails.styled';

export const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState([]);
  const { title, poster_path, popularity, overview, genres } = movie;

  useEffect(() => {
    DetailsMovies(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      {' '}
      <BackLink />
      <Section>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <ListWrapper>
          <h1>{title}</h1>
          <TitleOption>User score:</TitleOption>
          <TextOption> {Math.floor(popularity)}%</TextOption>
          <TitleOption>Overview: </TitleOption>
          <TextOption>{overview}</TextOption>
          <TitleOption>Ganres:</TitleOption>
          <TextOption> {getGenres(genres)}</TextOption>
        </ListWrapper>
      </Section>
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};
