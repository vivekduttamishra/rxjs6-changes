export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: string;
  Poster: string;
  imdbRating: string|number;
  BoxOffice?: number;
  ReleaseDate?: string;
  Description?: string;
  Tags?: string;
  Rating?: string;
  Votes?: string;
}
