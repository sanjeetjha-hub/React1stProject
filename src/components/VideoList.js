import Video from "./Video";
import PlayButton from "./PlayButton";

function VideoList({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("play")}
            onPause={() => console.log("pause")}
          ></PlayButton>
        </Video>
      ))}
    </>
  );
}

export default VideoList;
