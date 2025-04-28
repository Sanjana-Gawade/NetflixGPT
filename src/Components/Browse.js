import Header from "./Header";

import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptStatus = useSelector((store) => store.gpt.showGPTSearch);

  //Fetch Data from TMDB API and update the store with data

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
    <Header />
    {gptStatus ? (
      <GPTSearch />
    ) : (
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    )}
  </div>
  );
};

export default Browse;
