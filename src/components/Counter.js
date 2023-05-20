import { useRef, useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  let num = useRef(0);
  function handleClick(e) {
    e.stopPropagation();
    setNumber(number + 1);
    num.current++;
    console.log(num.current);
  }
  return (
    <>
      <h1 style={{ color: "grey" }}>{number}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default Counter;
