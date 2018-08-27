import { Injectable } from "@angular/core";
import { Movie } from "./movie";

import { Observable, interval } from "rxjs";
import {map, take, tap} from 'rxjs/operators';


@Injectable()
export class RxMovieService  {
  getMovies(): Movie[] {
    throw new Error("Method not implemented.");
  }
  search(term: { key: string; param: string; }): Movie[] {
    throw new Error("Method not implemented.");
  }
  constructor() {}

  _getMovieArray(): Movie[] {
    return [
      {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        imdbID: "tt1201607",
        Type: "movie",
        Poster: "/images/tt1201607.jpg",
        imdbRating: "8.1",
        BoxOffice: 2.5,
        ReleaseDate: "2011-08-17"
      },
      {
        Title: "Harry Potter and the Half-Blood Prince",
        Year: "2009",
        imdbID: "tt0417741",
        Type: "movie",
        Poster: "/images/tt0417741.jpg",
        imdbRating: "7.5",

        BoxOffice: 4.7,
        ReleaseDate: "2009-01-11"
      },
      {
        Title: "Star Wars: Episode IV - A New Hope",
        Year: "1977",
        imdbID: "tt0076759",
        Type: "movie",
        Poster: "/images/tt0076759.jpg",
        imdbRating: "8.7",
        BoxOffice: 3.5,
        ReleaseDate: "1977-08-17"
      },
      {
        Title: "Star Wars: Episode V - The Empire Strikes Back",
        Year: "1980",
        imdbID: "tt0080684",
        Type: "movie",
        Poster: "/images/tt0080684.jpg",
        imdbRating: "8.8",
        BoxOffice: 1,
        ReleaseDate: "1980-06-12"
      },
      {
        Title: "Batman Begins",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster: "/images/tt0372784.jpg",
        imdbRating: "8.3",
        BoxOffice: 3,
        ReleaseDate: "2004-01-11"
      }
    ];
  }

  getAllMovies(): Observable<any> {
    console.log("rx service returning getMovies");
    const movies = this._getMovieArray();

    return Observable
            .interval(1000)
            .pipe(
              tap ( value => console.log('before map', value)),
              map ( i => movies[i]),
              tap(value => console.log('after map', value)),
              take(movies.length)
            );
            

  }

  getMovie(id: string): Movie {
    throw new Error("Method not implemented.");
  }
  addMovie(movie: Movie): boolean {
    throw new Error("Method not implemented.");
  }
  updateMovie(movie: Movie) {
    throw new Error("Method not implemented.");
  }
  deleteMovie(imdbId: string): boolean {
    throw new Error("Method not implemented.");
  }
}
