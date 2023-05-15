import { useState } from "react";
import "./PLayButton.css";
function PlyButton({ onPlay, onPause }) {
  const [play, setPlay] = useState(false);

  function handleClick(e) {
    e.stopPropagation();

    if (play) {
      onPause();
    } else {
      onPlay();
    }

    setPlay(!play);
  }
  return (
    <>
      <button onClick={handleClick}>{play ? "Pause ⏸️" : "Play ▶️"}</button>
    </>
  );
}

export default PlyButton;
