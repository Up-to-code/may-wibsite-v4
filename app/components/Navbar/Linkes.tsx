"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icone from "./Icone";
type isacktiv = {
  isActive: boolean;
  isNotActive: Function;
};
function Linkes({ isActive, isNotActive }: isacktiv) {
  const pathname = usePathname();

  return (
    <div>
      <div className="hidden_and_show">
        <div className=" flex gap-2 selection:text-white ">
          <Link
            href={"/"}
            className={
              " py-1 px-2  text-gray-800" +
              (pathname == "/"
                ? " font-semibold border-b border-black text-black"
                : "")
            }
          >
            Home
          </Link>

          <Link
            href={"/Skiles"}
            className={
              " py-1 px-2  text-gray-800" +
              (pathname == "/Skiles"
                ? " font-semibold border-b border-black text-black"
                : "")
            }
          >
            Skiles
          </Link>

          <Link
            href={"/Projekts"}
            className={
              " py-1 px-2  text-gray-800" +
              (pathname == "/Projekts"
                ? " font-semibold border-b border-black text-black"
                : "")
            }
          >
            Projekts
          </Link>

          <Link
            href={"/Abuot"}
            className={
              " py-1 px-2  text-gray-800" +
              (pathname == "/Abuot"
                ? " font-semibold border-b border-black text-black"
                : "")
            }
          >
            Abuot
          </Link>
        </div>
      </div>

      <Icone isActive={isActive} isNotActive={isNotActive} />
    </div>
  );
}

export default Linkes;
