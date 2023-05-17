import { useContext, useState } from "react";
import "./PLayButton.css";
import ThemeContext from "../Context/ThemeContext";
function PlyButton({ onPlay, onPause }) {
  const theme = useContext(ThemeContext);
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
      <button className={theme} onClick={handleClick}>
        {play ? "Pause ⏸️" : "Play ▶️"}
      </button>
    </>
  );
}

export default PlyButton;
