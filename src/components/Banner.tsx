import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
//@ts-ignore
import TypeWriter from "react-typewriter";
import axios from "../axios";
import requests from "../requests";
import styles from "../styles/Banner.module.css";

export const Banner: React.FC = () => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const num = Math.floor(Math.random() * Object.keys(requests).length);
    const category = Object.keys(requests)[num];
    const request = await axios.get(requests[category]);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
    return request;
  };

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
          <TypeWriter typing={1}>
            {movie?.title || movie?.name || movie?.original_name}
          </TypeWriter>
        </h1>
        <div className={styles.buttons}>
          <Button>Play</Button>
          <Button onClick={fetchData}>Random Movie</Button>
        </div>
        <h1 className={styles.description}>
          <TypeWriter typing={1}>{truncate(movie?.overview, 150)}</TypeWriter>
        </h1>
      </div>
      <div className={styles.fadeBottom}></div>
    </header>
  );
};
