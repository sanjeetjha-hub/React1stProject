import "./Video.css";

function Video({ id, title, channel, views, time, verified }) {
  return (
    <>
      <div className="container">
        <div>
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
        </div>
      </div>
    </>
  );
}

export default Video;
