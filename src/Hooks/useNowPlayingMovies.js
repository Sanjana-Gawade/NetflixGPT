import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {addNowPlayingMovies} from '../utils/movieSlice'
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPLayingMovies = useSelector(
    (store) => store.movies.NowPlayingMoviess
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    const result = json.results;

    dispatch(addNowPlayingMovies(result));
  };

  useEffect(() => {
    !NowPLayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
