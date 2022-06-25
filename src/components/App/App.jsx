import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import { Container} from "./App.styled";
import HomePage from "pages/HomePage";
import MoviePage from "pages/MoviesPage";
import NotFound from "pages/NotFound";
import MovieDetailsPage from "pages/MovieDetailsPage";



export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage/>} />
        <Route path="*" element={<NotFound/>}/>     
        </Route>
        
      </Routes>  
    </Container>
  );
};
