import { useEffect, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
  channel: "CodeDost",
  time: "1year ago",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ editableVideo }) {
  const [video, SetVideo] = useState(initialState);
  const dispatch = useVideoDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
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
