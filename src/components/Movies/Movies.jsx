import { useState } from "react";
import { SearchMovie } from "service/Api";
import { Link } from "react-router-dom";

const Movies = () => {
    const [text, setText] = useState('');
    const [movie, setMovie] = useState([]);

      const onSubmitForm = e => {
    e.preventDefault();
    if (text.trim() === '') {
      alert('введите значение ');
      return;
    }
          SearchMovie(text).then(data => setMovie(data.results));
    setText('');
  };
   
 const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setText(text);
  };
    return <div><form onSubmit={onSubmitForm}>
        <input type="text" value={text} onChange={handelInputChange} />
        <button type="submit"> search</button>

    </form>
    <ul>
            {movie && movie.map(movi => <li key={movi.id}> 
            <Link to={`/movies/${movi.id}`}>{movi.title}</Link></li>)}
    </ul> 
</div>



};
export default Movies;