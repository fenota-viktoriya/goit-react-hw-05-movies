import { useEffect, useState } from "react";
import {CreditsMovie} from '../../service/Api'
import { useParams } from "react-router-dom";
import { List, Item ,Title, Image, Info} from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        CreditsMovie(movieId).then(data => {
            if (!data.cast) return;
            setMovies(data.cast)
        });
    }, [movieId])
    
    return <List>{movies.map(({ profile_path, character, name, id }) => !!profile_path &&
    <Item key={id}><Image src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
        <Title>Name:</Title>
        <Info>{name}</Info>
        <Title> Character:</Title>
        <Info> {character}</Info>
    </Item>
    )}
    </List> 
        
};
export default Cast;