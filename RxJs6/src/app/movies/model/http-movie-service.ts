
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import { Movie } from "./movie";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpMovieService {
  private baseUrl = "/api";

  constructor(private http: Http) {}

  getAllMovies(): Observable<any> {

    const url = `${this.baseUrl}/movies.json`;

    return this._getRequest(url)
      .do(result => console.log(result))
      .map(result => result.Search)
      .do(result => console.log(result));
  }

  _getRequest(url): Observable<any> {
    console.log("fetching", url);
    return (
      this.http
        .get(url) //you get http response
        // now convert it's body to json object (Movies)
        .map(response => response.json())
        // incase there is a error return error.status as error
        .catch(error => Observable.throw(error.status))
    );
  }

  getMovies(): Movie[] {
    return null;
  }

  addMovie(movie: Movie): boolean {
    throw new Error("Method not implemented.");
  }

  getMovie(imdbId: string): Observable<any> {
    const url = `${this.baseUrl}/details/${imdbId}.json`;

    return this._getRequest(url);
  }
  deleteMovie(imdbId: string): boolean {
    throw new Error("Method not implemented.");
  }
  search(term: { key: string; param: string }): Movie[] {
    throw new Error("Method not implemented.");
  }
}
