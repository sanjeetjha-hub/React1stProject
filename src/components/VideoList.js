import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";

function VideoList({ dispatch, editVideo }) {
  const videos = useVideos();
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
