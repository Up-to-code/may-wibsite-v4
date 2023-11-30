"use client";
import Image from "next/image";
import Link from "next/link";
interface PropsTypes {
  title_art: string;
  url: string;
  urlImage: string;
}
// y-wibsite-v4.vercel.app
function Card({ title_art, url, urlImage }: PropsTypes) {
  return (
    <Link href={(`/Projects/`) + url}>
      <div className="max-w-[300px] m-auto ">
        <div className="w-[300px] h-40 bg-gray-300 rounded flex justify-center items-center overflow-hidden  p-1">
          <Image
            width={"200"}
            priority={true}
            height={"120"}
            src={urlImage ? urlImage : ""}
            alt="p"
            className={"max-w-[200px]  " + (urlImage ? "block" : "hidden")}
          />
        </div>
        <p className="mt-2 font-semibold text-lg ">{title_art}</p>
      </div>
    </Link>
  );
}

export default Card;
