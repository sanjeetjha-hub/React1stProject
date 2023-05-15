import "./App.css";
import "./components/Video";
import Video from "./components/Video";
import videos from "./data/data";
import PlayButton from "./components/PlayButton";

export default function Gallery() {
  return (
    <div className="App">
      <h1>Videos</h1>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.views}
          views={video.time}
          time={video.time}
          verified={video.verified}
        ></Video>
      ))}
      <div style={{ clear: "both" }}>
        <PlayButton
          onPlay={() => console.log("play")}
          onPause={() => console.log("pause")}
        >
          Play
        </PlayButton>
      </div>
    </div>
  );
}
