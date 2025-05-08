import { useState } from "react";
import { randomnum } from "./App";

export default function Button() {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setDisabled(true);
    randomnum();

    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <div className="text-center mt-24 select-none">
      <button
        className={`rounded-3xl p-3 text-xl text-white ${
          disabled
            ? "bg-stone-500 cursor-not-allowed"
            : "bg-stone-950 hover:bg-stone-700"
        }`}
        onClick={handleClick}
        disabled={disabled}
      >
        四字熟語を作る
      </button>
    </div>
  );
}
