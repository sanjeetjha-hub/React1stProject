import "./App.css";
import "./components/Video";
import videoDB from "./data/data";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

export default function Gallery() {
  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <div className="App">
      <AddVideo addVideos={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}
