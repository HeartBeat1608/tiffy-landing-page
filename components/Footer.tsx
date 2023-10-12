import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white w-full">
      <div className="container mx-auto px-6 md:px-0 flex flex-col items-center justify-center py-4 border-t-2 border-emerald-500 mt-4">
        <div className="flex gap-6 items-center">
          <Image src={"/assets/logo.png"} height={24} width={24} alt="Tiffy" />
          <h2 className="text-sm font-medium tracking-wider">
            &copy; 2023. Tiffy. Atritam.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
