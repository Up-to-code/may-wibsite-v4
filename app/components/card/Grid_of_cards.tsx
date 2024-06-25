/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { db } from "@/app/Firebase/db";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import Card from "./Card";
import Looding from "../looding/Looding";
import Link from "next/link";
import { useProjcts } from "@/app/Store/Projcts_Store";
import { usePathname } from "next/navigation";

function Grid_of_cards() {
  const { Projcts, setAllProjcts } = useProjcts();
  const pathname = usePathname();
  useEffect(() => {
    const getProjcts = async () => {
      if (Projcts.length == 0) {
        const querySnapshot = await getDocs(collection(db, "Projekts"));
        const Projcts_data = querySnapshot.docs.map((doc) => doc.data());
        setAllProjcts(Projcts_data);
      }
    };
    getProjcts();
  }, [Projcts]);

  const islod = (
    <>
      <Looding />
      <Looding />
      <Looding />
      <Looding />
    </>
  );
  return (
    <>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2  items-center  gap-y-10  ">
        {pathname == "/"
          ? Projcts
            ? Projcts?.map((e: any, index: number) => {
                if (index < 4) {
                  return (
                    <>
                      <Card
                        key={index}
                        title_art={e.title}
                        url={e.id}
                        urlImage={e.Imageurl}
                      />
                    </>
                  );
                } else {
                  return null;
                }
              })
            : islod
          : Projcts
          ? Projcts?.map((e: any, index: number) => {
              return (
                <>
                  <Card
                    title_art={e.title}
                    url={e.id}
                    urlImage={e.Imageurl}
                    key={index}
                  />
                </>
              );
            })
          : islod}
      </div>

      {pathname == "/" && Projcts?.length > 4 && (
        <Link href={"/Projects"}>
          <div className="py-2 px-5 bg-blue-500 text-white font-bold w-max mx-12">
            More
          </div>
        </Link>
      )}
    </>
  );
}

export default Grid_of_cards;
