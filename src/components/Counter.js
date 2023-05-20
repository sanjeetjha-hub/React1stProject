import { useContext, useRef, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

function Counter() {
  const [number, setNumber] = useState(0);
  const theme = useContext(ThemeContext);
  let num = useRef(0);
  function handleClick(e) {
    e.stopPropagation();
    setNumber(number + 1);
    num.current++;
    console.log(num.current);
  }
  return (
    <>
      <div className="flex-container">
        <h1 className={theme}>{number}</h1>
        <button onClick={handleClick}>Increment</button>
      </div>
    </>
  );
}

export default Counter;
