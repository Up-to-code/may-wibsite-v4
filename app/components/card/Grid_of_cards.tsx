"use client";

import { db } from "@/app/Firebase/db";
import { DocumentData, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Card from "./Card";
import Looding from "../looding/Looding";
import { usePathname } from "next/navigation";


function Grid_of_cards() {
  const [Data, setData] = useState<[] | DocumentData>();
 const pathname = usePathname()
  let api: [] | DocumentData = [];
  const getApi = async () => {
    const querySnapshot = await getDocs(collection(db, "Projekts"));
    querySnapshot.forEach((doc) => {
      let ob = { id: doc.id, ...doc.data() };
      api.push(ob);
      console.log(api)
      setData(api);
    });
  };
  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const islod = (
    <>
      <Looding />
      <Looding />
      <Looding />
      <Looding />
    </>
  );
  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2  items-center  gap-y-10  ">
     
     {
      pathname == "/" ? 
      Data?.map((e: any , index : number) => {
       
       if (index <= 4) {
        return (
        <>
        <Card
          title_art={e.title}
          url={e.id}
          urlImage={e.Imageurl}
          key={e.id}
        />
      </>)
       }
     
      })
    :     Data
        ? Data?.map((e: any) => {
            return (
              <>
                <Card
                  title_art={e.title}
                  url={e.id}
                  urlImage={e.Imageurl}
                  key={e.id}
                />
              </>
            );
          })
        : islod
     }
     
  
    </div>
  );
}

export default Grid_of_cards;
