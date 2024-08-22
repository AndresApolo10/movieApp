import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const MovieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    //api_key: '596c04fd4ef7357983ded3a4a33f3ed7',
    api_key: THE_MOVIE_DB_KEY ?? 'NO-Key',
    language: 'es',
  },
});
