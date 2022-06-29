import { Route, Routes, Navigate } from "react-router-dom";
import  { Suspense, lazy } from 'react';
import Navigation from "../Navigation";
import { Container} from "./App.styled";
import Reviews from "components/Reviews/Reviews";
import Cast from "components/Cast/Cast.styled";

const HomePage = lazy(() => import('../../pages/HomePage').then(module=>({default: module.HomePage})));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage').then(module=>({default: module.MovieDetailsPage})));
const MoviePage= lazy(() => import('../../pages/MoviesPage').then(module=>({default: module.MoviePage})));

export const App = () => {
  return (
    <Container>
      <Suspense fallback="">
        <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}/>
           <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
         <Route path="*" element={<Navigate to="/"/>}/>  
        </Routes>
      </Suspense>
      
    </Container>
  );
};
