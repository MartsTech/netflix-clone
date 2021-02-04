import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import styles from "../styles/Banner.module.css";

export const Banner: React.FC = () => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <h1 className={styles.description}>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className={styles.fadeBottom}></div>
    </header>
  );
};
