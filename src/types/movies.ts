export interface CategoryResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  backdrop_path: string;
  genre_ids?: number[] | null;
  original_language: string;
  original_title?: string | null;
  poster_path: string;
  video?: boolean | null;
  vote_average: number;
  vote_count: number;
  overview: string;
  id: number;
  title?: string | null;
  release_date?: string | null;
  adult?: boolean | null;
  popularity: number;
  media_type: string;
  origin_country?: string[] | null;
  first_air_date?: string | null;
  name?: string | null;
  original_name?: string | null;
}

export interface Category {
  title: string;
  url: string;
}
