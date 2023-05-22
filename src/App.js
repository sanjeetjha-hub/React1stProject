import "./App.css";
import "./components/Video";
import { useCallback, useReducer, useRef, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import VideosContext from "./Context/VideosContext";
import VideoDispatchContext from "./Context/VideoDispatchContext";
import Counter from "./components/Counter";
import VideoDb from "./data/data";

export default function Gallery() {
  console.log("render app");
  const [editableVideo, setEditableVideo] = useState(null);
  const inputRef = useRef(null);
  const [mode, setMode] = useState("darkMode");
  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((vid) => vid.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      case "LOAD":
        return action.payload;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, VideoDb);
  // const [videos, setVideos] = useState(videoDB);

  // function addVideos(video) {
  //   dispatch({ type: "ADD", payload: video });
  // setVideos([[...videos, { ...video, id: videos.length + 1 }]])
  // }
  // function deleteVideo(id) {
  //   dispatch({ type: "DELETE", payload: id });
  // setVideos(videos.filter((video) => video.id !== id));
  // }
  const editVideo = useCallback(
    function editVideo(id) {
      setEditableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  // function updateVideo(video) {
  //   dispatch({ type: "UPDATE", payload: video });
  //   const index = videos.findIndex((vid) => vid.id === video.id);
  //   const newVideos = [...videos];
  //   newVideos.splice(index, 1, video);
  //   setVideos(newVideos);
  // }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`}>
            <button onClick={() => { inputRef.current.JumpTo() }}>Focus</button>
            <button
              className="outSideButtons"
              onClick={() => {
                setMode(mode === "darkMode" ? "lightMode" : "darkMode");
              }}
            >
              {mode === "darkMode" ? "lightMode" : "darkMode"}
            </button>
            <Counter></Counter>
            <AddVideo ref={inputRef} editableVideo={editableVideo}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}
