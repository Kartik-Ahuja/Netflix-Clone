import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [bannerTrailer, setBannerTrailer] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 2)
        ]
      );
    }
    fetchData();
  }, []);

  function Truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "390",
    width: "100%",
    playersVars: {},
  };
  const HandleBanner = (movies) => {
    if (bannerTrailer) {
      setBannerTrailer("");
    } else {
      movieTrailer(movies?.original_title || movies?.original_name || "")
        .then((url) => {
          console.log(url);
          bannerTrailer(url);
          // const urlParams = new URLSearchParams(new URL(url).search);

          // urlParams.append('v',);
        })
        .catch((error) => console.log(error));
    }
  };
  console.log(movies);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner_buttons">
          <button
            onClick={() => HandleBanner(movies)}
            className="banner_button"
          >
            play
          </button>
          <button className="banner_button">my list</button>
        </div>
        <h1 className="banner_description">
          {Truncate(movies?.overview, 150)}
        </h1>
      </div>

      <div className="banner_fadebottom" />
      {bannerTrailer.length > 0 ? (
        <YouTube videoId={bannerTrailer.split("=")[1]} opts={opts} />
      ) : null}
    </header>
  );
};

export default Banner;
