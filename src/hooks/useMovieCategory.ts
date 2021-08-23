import { useEffect, useState } from "react";
import { useStore } from "stores/store";
import { Movie } from "types/movies";

const useMovieCategory = (categoryTitle?: string) => {
  const { getMovieCategory } = useStore().movieStore;
  const [movies, setMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async (title: string) => {
      const movies = await getMovieCategory(title);
      setMovies(movies);
    };

    if (categoryTitle) {
      fetchMovies(categoryTitle);
    }
  }, [categoryTitle, getMovieCategory]);

  return [movies] as const;
};

export default useMovieCategory;
