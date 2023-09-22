/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type isOpn = {
  isActive: boolean;
  sNotActive: Function;
};
function Daiwor({ isActive, sNotActive }: isOpn) {
  const [animatea, setanimate] = useState("window.innerWidth");
  //

  useEffect(() => {
    setanimate(
      isActive
        ? "translate-y-14 h-10 opacity-75 bg-black h-screen animate-all "
        : " translate-y-0 h-screen opacity-0 bg-black "
    );
  }, [isActive]);


  const close = () => {
    sNotActive(false);
  };

  return (
    <div className={animatea + "w-full  fixed block sm:hidden"}>
      <div className="w-full flex flex-col justify-center items-center  text-white gap-3 pt-8 text-xl font-bold ">
        <Link
          href={"/"}
          className={"bg-lole w-full text-center py-2 px-4  tr animate-all "}
          onClick={() => {
            close();
          }}
        >
          Home
        </Link>

        <Link
          href={"/Skiles"}
          className={"bg-lole w-full text-center py-2 px-4  tr animate-all "}
          onClick={() => {
            close();
          }}
        >
          Skiles
        </Link>

        <Link
          href={"/Projekts"}
          className={"bg-lole w-full text-center py-2 px-4  tr animate-all "}
          onClick={() => {
            close();
          }}
        >
          Projekts
        </Link>

        <Link
          href={"/Abuot"}
          className={"bg-lole w-full text-center py-2 px-4  tr animate-all "}
          onClick={() => {
            close();
          }}
        >
          Abuot
        </Link>
      </div>
    </div>
  );
}

export default Daiwor;
