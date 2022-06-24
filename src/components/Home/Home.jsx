import { TreandingMovies} from "service/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    
    const [movies, setMovies] = useState(null);
    useEffect(() => {
     
       TreandingMovies().then(data => setMovies(data.results));
       
    },[])

    return <div><h1>Trending today</h1>
    <ul>
            {movies && movies.map(movi => <li key={movi.id}> 
            <Link to={`/movies${movi.id}`}>{movi.title}</Link></li>)}
    </ul> </div>

    
};
export default Home