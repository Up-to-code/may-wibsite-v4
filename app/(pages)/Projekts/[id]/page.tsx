"use client";
import { db } from "@/app/Firebase/db";
import Skile from "@/app/components/Skiles/Skile";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
type Props = {
  params: {
    id: string;
  };
  allData: {
    Skiles: [string];
    Imageurl: string;
    cont: string;
    title: string;
  };
};

const getData = async ({ params, allData }: Props) => {
  const docRef = doc(db, "Projekts", params.id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const allData = docSnap.data();
    const array: [string] = allData.Skiles;
    return (
      <div className="max-w-3xl m-auto  p-5 pb-10  shadow-md  bg-white min-h-screen my-4 ">
        <div className="h-52 bg-zinc-300 rounded flex justify-center p-3">
          <Image
            src={allData?.Imageurl}
            alt="Prodackt"
            width={"300"}
            height={"250"}
          />
        </div>
        <div className="text-3xl font-bold py-4">{allData?.title}</div>
        <div className=" flex gap-2">
          {array.map((e: string) => {
            return (
              <p
                key={Math.random()}
                className="py-1 px-4 font-bold text-lg bg-blue-500 text-white"
              >
                {e}
              </p>
            );
          })}
          {allData.Skile}
        </div>
        <div className="text-lg py-4 ">
          <article>{allData?.cont}</article>
        </div>
      </div>
    );
  } else {
  }
};

function page({ params, allData }: Props) {
  const data = getData({ params, allData });
  return data;
}

export default page;
