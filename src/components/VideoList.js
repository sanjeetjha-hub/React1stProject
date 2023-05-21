import Video from "./Video";
import PlayButton from "./PlayButton";
import axios from "axios";
import { useEffect } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
import useVideos from "../hooks/Videos";

function VideoList({ editVideo }) {
  const videos = useVideos();
  const dispatch = useVideoDispatch();
  const url = "https://my.api.mockaroo.com/videos.json?key=ba9689e0";
  async function loadVideos() {
    const res = await axios.get(url);
    console.log(res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    loadVideos();
  }, []);
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
            <PlayButton
              onPlay={() => console.log("play")}
              onPause={() => console.log("pause")}
            ></PlayButton>
          </Video>
        ))}
      </div>
    </>
  );
}

export default VideoList;
