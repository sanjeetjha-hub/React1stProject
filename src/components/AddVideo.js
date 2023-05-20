import { useEffect, useRef, useState } from "react";
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
  const inputref = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (video.title && video.views) {
      if (editableVideo) {
        dispatch({ type: "UPDATE", payload: video });
      } else {
        dispatch({ type: "ADD", payload: video });
      }
    }

    SetVideo(initialState);
  }
  function handleChange(e) {
    SetVideo({ ...video, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    if (editableVideo) SetVideo(editableVideo);
    inputref.current.focus();
  }, [editableVideo]);
  return (
    <div className="flex-container">
      <form>
        <input
          ref={inputref}
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
    </div>
  );
}

export default AddVideo;
