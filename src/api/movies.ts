import axios, { AxiosResponse } from "axios";
import { Movie } from "types/movies";
import movieRequests from "utils/movieRequests";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const Movies = {
  list: (genre: string) =>
    requests.get<Movie[]>(
      //@ts-ignore
      movieRequests[genre]?.url || movieRequests.fetchTrending.url
    ),
};

const movies = {
  Movies,
};

export default movies;
