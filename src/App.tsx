import React from "react";
import "./index";
import { kanji } from "./data/kanji";
import { link } from "fs";

function randomnum() {
  const maxnum = kanji.length;
  let count = 0;
  let outputkanji: string[] = []; // 型アノテーションを追加
  while (count < 4) {
    let random = Math.floor(Math.random() * maxnum);
    let output = kanji[random];
    outputkanji.push(output);
    count++;
  }

  const element = document.getElementById("words");
  if (element) {
    element.textContent = outputkanji.join("");
  } else {
    console.error("エラー！やり直してね！");
  }
}

function App() {
  return (
    <div className=" mt-16">
      <h1 className="text-center text-sky-700">四字熟語を作るアプリ</h1>
      <div className="mt-20">
        <p className="text-6xl text-center" id="words">
          〇〇〇〇
        </p>
      </div>
      <div className=" text-center mt-24 select-none">
        <button
          className="rounded-xl p-2 border-2 text-2xl border-sky-700"
          onClick={randomnum}
        >
          四字熟語を作る
        </button>
      </div>

      <div className="mt-28 lg:mt-16 text-center border-2 m-16 p-5 lg:border-0 lg:m-0 lg:p-0">
        <h3>制作者情報</h3>
        <div className=" justify-items-center grid gap-2 grid-cols-1 lg:grid-cols-3 mt-5">
          <div className=" flex">
            <p>sns：</p>
            <a
              href="https://x.com/aputech2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              ひー@情報系学生
            </a>
          </div>
          <div className=" flex">
            <p>website：</p>
            <a
              href="https://hii-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ひーサイト
            </a>
          </div>
          <div className=" flex">
            <p>Zenn：</p>
            <a
              href="https://zenn.dev/aputech"
              target="_blank"
              rel="noopener noreferrer"
            >
              ひー@情報系学生
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
