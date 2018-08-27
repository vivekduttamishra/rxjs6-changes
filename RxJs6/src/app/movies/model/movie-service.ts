import { Movie } from "./movie";

export interface MovieService {
  getMovies(): Movie[];
  getMovie(imdbId: string): Movie | null;
  addMovie(movie: Movie): boolean;
}
