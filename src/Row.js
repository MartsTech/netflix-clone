import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  /* A snippet of code which runs based on a spacific condition/variable */
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [], run once when the row loads, and dont run again
    // if [movies], run once when load and every time movies change
  }, [fetchURL]);

  console.log(movies);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>

      {/* container -> posters */}
    </div>
  );
}

export default Row;
