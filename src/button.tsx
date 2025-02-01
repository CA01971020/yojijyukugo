import { randomnum } from "./App";

export default function Button() {
  return (
    <div className=" text-center mt-24 select-none">
      <button
        className="rounded-3xl p-3 text-xl text-white bg-stone-950 hover:bg-stone-700 font-yujisyuku"
        onClick={randomnum}
      >
        四字熟語を作る
      </button>
    </div>
  );
}
