import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { MovieList } from 'components/MovieList';
import { SearchMovie } from 'service/Api';
import { Form, Btn, Input } from './Pages.styled';

export const MoviePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const curentPos = searchParams.get('query');

  useEffect(() => {
    if (!curentPos) return;
    SearchMovie(curentPos).then(data => {
      if (data.length === 0) {
        toast.error('No found');
        return;
      }
      setMovies(data);
    });
  }, [curentPos]);

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter the text');
      return;
    }
    setSearchParams({ query: query.trim() });
  };
  const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={onSubmitForm}>
        <Input type="search" name={query} onChange={handelInputChange} />
        <Btn type="submit">
          <FcSearch />
        </Btn>
      </Form>
      <MovieList movies={movies} />
    </>
  );
};
