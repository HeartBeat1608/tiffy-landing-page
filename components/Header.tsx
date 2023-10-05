"use client";
import React from "react";
import Image from "next/image";
import Modal from "./Modal";
import mixpanel from "mixpanel-browser";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-white w-full">
      <div className="flex justify-between items-center w-full container mx-auto pt-4 pb-8 px-6 md:px-0">
        <h1>
          <Image src={"/assets/logo.png"} height={40} width={40} alt="Tiffy" />
        </h1>
        <span className="flex gap-6 items-center justify-end">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-emerald-500 border-b-transparent border-b-2 transition-colors duration-300 px-1 text-base"
            style={{ lineHeight: 0.85 }}
          >
            Home
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-emerald-500 border-b-transparent border-b-2 transition-colors duration-300 px-1 text-base"
            style={{ lineHeight: 0.85 }}
          >
            About Us
          </a>
          <button
            className="bg-emerald-500 text-white px-8 py-1 rounded-full hover:bg-emerald-600 duration-200 text-base hidden md:block"
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
