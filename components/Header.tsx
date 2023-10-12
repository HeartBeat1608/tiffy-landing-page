"use client";
import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import mixpanel from "mixpanel-browser";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-white w-full" id="header">
      <div className="flex justify-between items-center w-full container mx-auto pt-4 pb-8 px-6 md:px-0">
        <h1>
          <Image src={"/assets/logo.png"} height={40} width={40} alt="Tiffy" />
        </h1>
        <nav className="flex items-center justify-center gap-6">
          <a
            className="hover:text-emerald-500 hover:font-bold duration-300 cursor-pointer"
            href="#header"
          >
            Home
          </a>
          <a
            className="hover:text-emerald-500 hover:font-bold duration-300 cursor-pointer"
            href="#about"
          >
            Why Tiffy?
          </a>
        </nav>
        <span className="gap-6 items-center justify-end hidden md:flex">
          <button
            className="bg-emerald-500 text-white px-8 py-1 rounded-full hover:bg-emerald-600 duration-200 text-base"
            onClick={() => {
              setOpen(true);
              try {
                mixpanel.track("header:get-tiffy");
              } catch (e) {
                console.error(e);
              }
            }}
          >
            Get Tiffy
          </button>
        </span>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Header;
