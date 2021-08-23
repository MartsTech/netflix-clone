import agent from "api/agent";
import { makeAutoObservable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { Movie } from "types/movies";
import getTrailerUrl from "utils/getTrailerUrl";
import { store } from "./store";

class MovieStore {
  movieRegistery = new Map<string, Movie[]>();
  trailerUrl: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.movieRegistery.clear();
    this.trailerUrl = null;
  };

  getMovieCategory = async (categoryTitle: string) => {
    if (this.movieRegistery.has(categoryTitle)) {
      return this.movieRegistery.get(categoryTitle) as Movie[];
    }
    return this.loadMovies(categoryTitle);
  };

  loadMovies = async (categoryTitle: string) => {
    const result = await agent.Movies.category(categoryTitle);
    const movies = result.results;

    runInAction(() => {
      this.movieRegistery.set(categoryTitle, movies);
    });

    return movies;
  };

  playTrailer = async (movie: Movie) => {
    const title = movie?.title || movie?.name || movie?.original_name;

    if (typeof title !== "string") {
      toast.error("An error occurred. Please try again.");
      return;
    }

    const trailerUrl = await getTrailerUrl(title);

    if (!trailerUrl) {
      toast.error("There is no trailer available for this movie.");
      return;
    }

    runInAction(() => {
      this.trailerUrl = trailerUrl;
    });

    store.commonStore.setModalOpen(true);
  };
}

export default MovieStore;
