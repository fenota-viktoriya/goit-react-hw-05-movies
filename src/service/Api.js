import axios from 'axios';

axios.defaults.baseURL= 'https://api.themoviedb.org';

axios.defaults.params = {
  api_key: '079f315d1c0a92bbce195275b13a313a' ,
};

export async function ServiceAPI() {
  try {
    const res = await axios.get(`/3/trending/movie/day`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
