import Image from "next/image";
import { Get_image } from "@/public/Get_image";
export default function Phto() {
  return (
    <div className="flex justify-end items-center">
      <div className="relative flex justify-center items-center">
        <Image
          src={Get_image.may_image}
          alt="me"
          priority
          className="z-10 rounded-full relative bottom-[1x] selection:opacity-5  hidden  sm:block   "
          width={"250"}
          placeholder="blur"
        ></Image>
      </div>
    </div>
  );
}
