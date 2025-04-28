import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMoviess);

  if (!movies) {
    return;
  }
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  console.log(movies ,"Main movie")

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overviewData={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
