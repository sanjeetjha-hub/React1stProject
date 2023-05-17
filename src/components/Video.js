import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../Context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";

function Video({
  id,
  title,
  channel,
  views,
  time,
  verified,
  children,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();
  return (
    <>
      <div className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel}
          {verified && "✅"}
        </div>
        <div className="view">
          {views} views<span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
