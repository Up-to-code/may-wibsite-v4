"use client";
import { db } from "@/app/Firebase/db";
import { doc, getDoc } from "firebase/firestore";
import { AiFillGithub } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Image from "next/image";
import { IconContext } from "react-icons";
type Props = {
  params: {
    id: string;
  };
};

const getData = async ({ params }: Props) => {
  const docRef = doc(db, "Projekts", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const allData = docSnap.data();
    const array: [string] = allData.Skiles;
    return (
      <div className="max-w-3xl m-auto  p-5 pb-10  shadow-md  bg-white min-h-[700px] rounded-md  my-4  relative">
        <div className="h-52 bg-zinc-300 rounded flex justify-center p-3">
          <Image
            src={allData?.Imageurl}
            alt="Project"
            width={"300"}
            height={"250"}
            className="w-auto"
          />
        </div>
        <div className="text-4xl font-bold py-4">{allData?.title}</div>
        <div className=" flex gap-2 flex-wrap">
          {array.map((e: string) => {
            return (
              <p
                key={Math.random()}
                className="py-1 px-4 font-bold text-lg bg-blue-600 text-white rounded-md"
              >
                {e}
              </p>
            );
          })}
          {allData.Skile}
        </div>
        <div className="text-lg py-4 ">
          <article>
            {allData?.cont.split("\n").map((e: string, index: number) => {
              return <p key={index}> {e}</p>;
            })}
          </article>
        </div>
        <IconContext.Provider value={{ size: "24px" }}>
          <div className="flex gap-3 absolute bottom-3 left-5 ">
            <div className="bg-zinc-800 px-5 py-2 rounded-md">
              <a
                href={allData?.githup}
                className="text-white font-bold text-lg flex justify-center items-center gap-2  "
              >
                <AiFillGithub />
                Github
              </a>
            </div>
            <div className="bg-blue-600 px-5 py-2 rounded-md">
              <a
                href={allData?.show}
                className="text-white font-bold text-lg flex justify-center items-center gap-2   "
              >
                <BiShow />
                Show
              </a>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    );
  } else {
  }
};

function page({ params }: Props) {
  const data = getData({ params });
  return data;
}

export default page;
