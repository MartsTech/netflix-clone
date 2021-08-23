import { useEffect, useState } from "react";
import { Movie } from "types/movies";
import categories from "utils/movieCategories";
import useMovieCategory from "./useMovieCategory";

const useRandomMovie = () => {
  const [movie, setMovie] = useState<Movie>();
  const [categoryTitle, setCategoryTitle] = useState<string>();
  const [movies] = useMovieCategory(categoryTitle);

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const getMovie = () => {
      if (movies) {
        const movie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(movie);
      }
    };

    getMovie();
  }, [movies]);

  const getCategory = () => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    setCategoryTitle(category.title);
  };

  const reload = () => {
    getCategory();
  };

  return [movie, reload] as const;
};

export default useRandomMovie;
