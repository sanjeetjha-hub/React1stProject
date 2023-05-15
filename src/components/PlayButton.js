import "./PLayButton.css";
function PlyButton({ children, onPlay, onPause }) {
  let play = false;

  function handleClick(e) {
    e.stopPropagation();

    if (play) {
      onPause();
    } else {
      onPlay();
    }

    play = !play;
  }
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default PlyButton;
