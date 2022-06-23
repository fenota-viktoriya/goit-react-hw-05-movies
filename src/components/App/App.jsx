import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import Home from "../Home";
import Movies from "../Movies";
import NotFound from "../NotFound ";
import { Container, Header} from "./App.styled";


export const App = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
         <Route path="*" element={<NotFound/>} />
      </Routes>  
    </Container>
  );
};
