import { Route, Routes, Navigate } from "react-router-dom";
import Navigation from "../Navigation";
import { Container} from "./App.styled";
import {HomePage,MovieDetailsPage,MoviePage} from "pages";
import Reviews from "components/Reviews/Reviews";
import Cast from "components/Cast/Cast.styled";




export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
