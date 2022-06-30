import axios from 'axios';
import toast from 'react-hot-toast';



 
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL= 'https://api.themoviedb.org';

axios.defaults.params = {
  api_key: '079f315d1c0a92bbce195275b13a313a' ,
};

export async function TreandingMovies() {
  try {
    const res = await axios.get(`/3/trending/movie/day`);
    return res.data.results;
  } catch (error) {
toast.error('Not Found');
    
  }
};
export async function SearchMovie(query) {
  try {
    const res = await axios.get(`/3/search/movie?query=${query}`);

    return res.data.results;
  } catch (error) {
   toast.error('Not Found');
  }
};
export async function DetailsMovies(id) {
  
  try {
    const res = await axios.get(`/3/movie/${id}`);
    return res.data;
  } catch (error) {
toast.error('Not Found');
  }
};

export async function CreditsMovie(movie_id) {
  try {
    const res = await axios.get(`3/movie/${movie_id}/credits`);

    return res.data;
  } catch (error) {
toast.error('Not Found');
  }
};

export async function ReviewsMovie(movie_id) {
  try {
    const res = await axios.get(`3/movie/${movie_id}/reviews`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

