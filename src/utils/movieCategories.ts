import { Category } from "types/movies";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const movieCategories: Category[] = [
  {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];

export default movieCategories;
