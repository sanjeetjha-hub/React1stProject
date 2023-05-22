import { useCallback, useContext, useMemo, useRef, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

function Counter() {
  const [number, setNumber] = useState(10);
  const theme = useContext(ThemeContext);
  let num = useRef(0);
  function handleClick(e) {
    e.stopPropagation();
    setNumber(number + 1);
    num.current++;
    console.log(num.current);
  }
  const fibFx = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);

  const fibMemoized = useMemo(() => fibFx(number), [number, fibFx]);
  return (
    <>
      <div className="flex-container">
        <h1 className={theme}>{number}</h1>
        <button onClick={handleClick}>Increment</button>
        <h1 className={theme}>Fib of {number}: {fibMemoized}</h1>
      </div>
    </>
  );
}

export default Counter;
