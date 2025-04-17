import React from "react";
import "./index";
import { kanji } from "./data/kanji";
import Button from "./button";
import Menu from "./menu";

export function randomnum() {
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
    <div>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap"
      />
      <div className=" text-right mr-16 mt-4">
        <Menu />
      </div>
      <div className=" mt-16">
        <h1 className="text-center text-sky-700 select-none font-yujisyuku">
          四字熟語を作るアプリ
        </h1>
        <div className="mt-20">
          <p className="text-7xl text-center font-yujisyuku" id="words">
            〇〇〇〇
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
