import Video from "./Video";
import PlayButton from "./PlayButton";
import axios from "axios";
import { useCallback, useEffect, useMemo } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
import useVideos from "../hooks/Videos";

function VideoList({ editVideo }) {
  const videos = useVideos();
  const dispatch = useVideoDispatch();
  const url = "https://my.api.mockaroo.com/videos.json?key=ba9689e0";
  async function loadVideos() {
    try {
      const res = await axios.get(url);
      dispatch({ type: "LOAD", payload: res.data });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadVideos();
    console.log("Video Rendered");
  }, []);
  const play = useCallback(() => console.log("Play"), []);
  const pause = useCallback(() => console.log("Pause"), []);
  const memoPlayButton = useMemo(
    () => <PlayButton onPlay={play} onPause={pause}></PlayButton>,
    [play, pause]
  );
  return (
    <>
      <div id="videoDiv" className="flex-container">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            editVideo={editVideo}
          >
            {memoPlayButton}
          </Video>
        ))}
      </div>
    </>
  );
}

export default VideoList;
