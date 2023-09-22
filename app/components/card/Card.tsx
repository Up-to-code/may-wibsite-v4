/* eslint-disable @next/next/no-img-element */
"use client"
import { Get_image } from "@/public/Get_image";
interface PropsTypes {
  title_art: string;
  url: string;
  urlImage: string;
}

function Card({ title_art , url , urlImage}:PropsTypes) {
  return (
    <div className="max-w-[300px] m-auto ">
      <div className="w-[300px] h-40 bg-gray-300 rounded flex justify-center items-center overflow-hidden  p-1">
        <img src={urlImage? urlImage : Get_image.pro} alt="p" className="max-w-[200px]  " />
      </div>
      <p className="mt-2 font-semibold text-lg ">
        {title_art}
      </p>
    </div>
  );
}

export default Card;
