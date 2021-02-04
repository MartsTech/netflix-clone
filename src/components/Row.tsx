import clsx from "clsx";
//@ts-ignore
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import styles from "../styles/Row.module.css";
import YouTube from "react-youtube";

interface RowProps {
  title: string;
  fetchURL: string;
  isLargeRow?: boolean;
}

const base_url = "https://image.tmdb.org/t/p/original/";

export const Row: React.FC<RowProps> = ({
  title,
  fetchURL,
  isLargeRow = false,
}) => {
  const [movies, setMovies] = useState<any>([]);
  const [trailerUrl, setTrailerUrl] = useState<any>("");

  const opts = {
    height: "390",
    width: "100%",
    playVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url: string) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err: Error) => console.log(err));
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      <div className={styles.posters}>
        {movies.map(
          (movie: any) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={clsx(styles.poster, {
                  [styles.large]: isLargeRow,
                })}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
