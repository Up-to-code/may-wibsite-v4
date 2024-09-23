"use client";

import { db } from "@/app/Firebase/db";
import { doc, getDoc } from "firebase/firestore";
import { AiFillGithub } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import Image from "next/image";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const docRef = doc(db, "Projekts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("Document not found");
  }
};

function Page({ params }: Props) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(params.id);
        setData(result);
      } catch (err : any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div> {/* Customize loader here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  const skills = data?.Skiles || [];
  return (
    <div className="max-w-3xl mx-auto p-5 pb-10 shadow-md bg-white min-h-[700px] rounded-md my-4 relative">
      <div className="h-52 bg-zinc-300 rounded flex justify-center items-center p-3">
        <Image
          src={data?.Imageurl}
          alt="Project"
          width={300}
          height={250}
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold py-4">{data?.title}</h1>
      <div className="flex gap-2 flex-wrap mb-4">
        {skills.map((skill: string, index: number) => (
          <p key={index} className="py-1 px-4 font-bold text-lg bg-blue-600 text-white rounded-md">
            {skill}
          </p>
        ))}
      </div>
      <div className="text-lg py-4">
        <article>
          {data?.cont.split("\n").map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
        </article>
      </div>
      <IconContext.Provider value={{ size: "24px" }}>
        <div className="flex gap-3 absolute bottom-3 left-5">
          <div className="bg-zinc-800 px-5 py-2 rounded-md">
            <a
              target="_blank"
              href={data?.githup}
              className="text-white font-bold text-lg flex justify-center items-center gap-2"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
              Github
            </a>
          </div>
          <div className="bg-blue-600 px-5 py-2 rounded-md">
            <a
              target="_blank"
              href={data?.show}
              className="text-white font-bold text-lg flex justify-center items-center gap-2"
              rel="noopener noreferrer"
            >
              <BiShow />
              Show
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Page;
