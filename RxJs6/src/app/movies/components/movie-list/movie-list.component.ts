import { Component, OnInit, Inject } from "@angular/core";
import { Movie } from "../../model/movie";
import { HttpMovieService } from "../../model/http-movie-service";
import { RxMovieService } from "../../model/rx-movie-service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private httpMovieService: HttpMovieService,
    private rxMovieService: RxMovieService
  ) {}

  ngOnInit() {
    this.movies = [];
  }

  httpRefresh(): void {
    this.movies = [];
    this.httpMovieService
      .getAllMovies()
      .subscribe(
        movies => (this.movies = movies),
        error => console.log("error", error)
      );
  }

  rxRefresh(): void {
    this.movies = [];

    this.rxMovieService
      .getAllMovies()
      .subscribe(
        movie => this.movies.push(movie),
        error => console.log("error", error)
      );
  }

  clear(): void {
    this.movies = [];
  }
}
