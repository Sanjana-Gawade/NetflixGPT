import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch , useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


export const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  async function getMovieTrailer() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    const json = await response.json();

    if (!Array.isArray(json.results)) return;

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    if (!trailerVideo) getMovieTrailer();
  }, [trailerVideo]);

  return trailerVideo?.key; // <- return the key directly
};
