import { useState } from "react";

import type { FC } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <button
      css={{
        padding: "1em",
        border: "none",
        borderRadius: "1em",
        cursor: "pointer",
      }}
      onClick={increment}
    >
      I was clicked {count} times
    </button>
  );
};

export default Counter;
