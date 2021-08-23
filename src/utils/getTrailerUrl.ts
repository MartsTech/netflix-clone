// @ts-ignore
import movieTrailer from "movie-trailer";

const getTrailerUrl = async (title: string) => {
  const url = await movieTrailer(title);

  if (typeof url !== "string") {
    return null;
  }

  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get("v");
};

export default getTrailerUrl;
