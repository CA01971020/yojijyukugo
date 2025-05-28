import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Menu() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* ハンバーガーメニュー */}
      <button onClick={() => setShow(true)}>
        <GiHamburgerMenu className="select-none text-3xl" />
      </button>

      {/* オーバーレイメニュー */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-sky-700 text-white font-yujisyuku z-50
          transition-opacity duration-300 ease-in-out
          ${
            show
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <button className="mt-4 mr-16" onClick={() => setShow(false)}>
          <IoMdClose className="select-none text-white text-3xl" />
        </button>

        <div className="text-center mt-16">
          <h1 className="text-white">制作者情報</h1>
          <div>
            {[
              { href: "https://github.com/CA01971020", label: "GitHub" },
              { href: "https://x.com/h1idev", label: "Twitter" },
              { href: "https://hii-dev.vercel.app/", label: "Portfolio" },
              { href: "https://zenn.dev/aputech", label: "Zenn" },
            ].map((item, idx) => (
              <div key={idx} className="mt-16">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
