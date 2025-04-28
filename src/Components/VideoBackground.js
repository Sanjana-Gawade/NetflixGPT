import { useMovieTrailer } from "../Hooks/useMoviewTrailer";

const VideoBackground = ({ id }) => {
    const youtubeVideoId = useMovieTrailer(id);
  
    // If no movieId or videoId yet, show nothing or a fallback
    if (!id || !youtubeVideoId) {
      return <div className="text-white p-4">Loading trailer...</div>;
    }
  
    return (
      <div>
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            youtubeVideoId +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
  };
  
  export default VideoBackground;
  