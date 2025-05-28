import "./index";
import { kanji } from "./data/kanji";
import Button from "./button";
import Menu from "./menu";

export function randomnum() {
  const maxnum = kanji.length;
  let outputkanji: string[] = [];

  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * maxnum);
    outputkanji.push(kanji[random]);
  }

  const element = document.getElementById("words");
  if (!element) {
    console.error("エラー！やり直してね！");
    return;
  }

  // 一旦空にする
  element.textContent = "";

  // タイプライター風に1文字ずつ表示
  let index = 0;
  const interval = setInterval(() => {
    element.textContent += outputkanji[index];
    index++;
    if (index >= outputkanji.length) {
      clearInterval(interval);
    }
  }, 200); // 1文字ずつ表示する間隔（ms）
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
        <h1 className="text-center text-sky-700 select-none">
          四字熟語を作るアプリ
        </h1>
        <div className=" mt-20">
          <p className="text-7xl h-20 text-center" id="words">
            〇〇〇〇
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
