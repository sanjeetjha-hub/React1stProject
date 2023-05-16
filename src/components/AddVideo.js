import { useEffect, useState } from "react";
import "./AddVideo.css";

const initialState = {
  channel: "CodeDost",
  time: "1year ago",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ addVideos, editableVideo, updateVideo }) {
  const [video, SetVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addVideos(video);
    }

    SetVideo(initialState);
  }
  function handleChange(e) {
    SetVideo({ ...video, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (editableVideo) SetVideo(editableVideo);
  }, [editableVideo]);
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
      <button onClick={handleSubmit}>
        {editableVideo ? "edit Video" : "Add Videos"}
      </button>
    </form>
  );
}

export default AddVideo;
