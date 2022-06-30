import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation } from '../Navigation';
import { Container } from './App.styled';

const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage }))
);
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage').then(module => ({
    default: module.MovieDetailsPage,
  }))
);
const MoviePage = lazy(() =>
  import('../../pages/MoviesPage').then(module => ({
    default: module.MoviePage,
  }))
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};
