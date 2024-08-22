import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMoviesResponse} from '../../../infraestructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infraestructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBMoviesResponse>('/top_rated');

    return topRated.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - TopRated');
  }
};
