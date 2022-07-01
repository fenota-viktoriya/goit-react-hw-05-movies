import { useEffect, useState } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { Links, List } from '../../pages/Pages.styled';
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

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const { title, poster_path, popularity, overview, genres } = movie;
  const [error, setError] = useState(false);

  useEffect(() => {
    DetailsMovies(movieId)
      .then(data => {
        if (data.length !==0)
      {  return setMovie(data);}
      })
      .catch(error => { console.error(error); setError(true)});
  }, [movieId]);

  return (
    <>
      {error && <Navigate to ='/' replace/>}
      <BackLink />
      {movie.length !== 0 && (
        <>
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
          <List>
            <li>
              <Links to="cast">Cast</Links>
            </li>
            <li>
              <Links to="reviews"> Reviews</Links>
            </li>
          </List>
          <Outlet />
        </>
      )}
    </>
  );
};
