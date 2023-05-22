import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatch";
import ThemeContext from "../Context/ThemeContext";

const initialState = {
  channel: "CodeDost",
  time: "1year ago",
  verified: true,
  title: "",
  views: "",
};

const AddVideo = forwardRef(function AddVideo({ editableVideo }, ref) {
  const [video, SetVideo] = useState(initialState);
  const dispatch = useVideoDispatch();
  const iRef = useRef(null);
  useImperativeHandle(ref, () => {                    //Limit the Access to The ref declared in parent
    return {
      JumpTo() {
        iRef.current.focus();
      }
    }
  })

  const theme = useContext(ThemeContext);
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
    // inputref.current.focus();
  }, [editableVideo]);
  return (
    <div className="flex-container">
      <form className={theme}>
        <input
          ref={iRef}
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
})

export default AddVideo;
