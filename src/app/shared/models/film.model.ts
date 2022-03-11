import {WeatherResponse} from "./weather.model";

export interface FilmResponse {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_connection?: null | Object;
  budget?: number;
  genres?: Object[];
  homepage?: string | null;
  id: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string | null;
  production_companies?: Object[];
  production_countries?: Object[];
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Object[];
  status?: string;
  tagline?: string | null;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export class Film {
  protected constructor(
    public id = 0,
    public overview = "",
    public release_date = "",
    public title = '',
    public vote_average = 0,
  ) {}

  public static Build(film: FilmResponse): Film {
    return new this(film.id, film.overview, film.release_date, film.title, film.vote_average);
  }
}
