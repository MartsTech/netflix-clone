export interface Movie {
  original_language: string;
  original_title?: string | null;
  poster_path: string;
  video?: boolean | null;
  vote_average: number;
  overview: string;
  release_date?: string | null;
  vote_count: number;
  title?: string | null;
  adult?: boolean | null;
  backdrop_path: string;
  id: number;
  genre_ids?: number[] | null;
  popularity: number;
  media_type: string;
  first_air_date?: string | null;
  name?: string | null;
  original_name?: string | null;
  origin_country?: string[] | null;
}
