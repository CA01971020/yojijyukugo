import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export function MenuState() {
  const [show, setShow] = useState(false);
  return { show, setShow };
}

export default function Menu() {
  const { show, setShow } = MenuState();
  if (show == true) {
    return (
      <div className=" fixed bg-sky-700 w-full h-screen top-0 font-yujisyuku">
        <button className="mt-4 mr-16" onClick={() => setShow(false)}>
          <IoMdClose className=" select-none text-white text-3xl" />
        </button>
        <div className=" text-center mt-16">
          <h1 className=" text-white">制作者情報</h1>
          <div>
            <div className=" mt-16">
              <a
                href="https://github.com/CA01971020"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className=" mt-16">
              <a
                href="https://x.com/hiitech2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div className=" mt-16">
              <a
                href="https://hii-site.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </div>
            <div className=" mt-16">
              <a
                href="https://zenn.dev/aputech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zenn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => setShow(true)}>
        <GiHamburgerMenu className=" select-none text-3xl" />
      </button>
    </div>
  );
}
