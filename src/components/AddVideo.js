import { useState } from "react";
import "./AddVideo.css";

const initialState = {
  channel: "CodeDost",
  time: "1year ago",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ addVideos }) {
  const [video, SetVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    SetVideo(initialState);
  }
  function handleChange(e) {
    SetVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      ></input>
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      ></input>
      <button onClick={handleSubmit}>Add Videos</button>
    </form>
  );
}

export default AddVideo;
