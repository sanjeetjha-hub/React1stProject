import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../Context/ThemeContext";

function Video({
  id,
  title,
  channel,
  views,
  time,
  verified,
  children,
  deleteVideo,
  editVideo,
}) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className={`container ${theme}`}>
        <button className="close" onClick={() => deleteVideo(id)}>
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
