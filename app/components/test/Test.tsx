"use client";

import { db } from "@/app/Firebase/db";
import { getDocs, collection, DocumentData } from "firebase/firestore";

import { useState } from "react";


function Test() {

  const [Data, setData] = useState<[] | DocumentData>();

let api: [] | DocumentData = []
  const getApi = async () => {
    const querySnapshot = await getDocs(collection(db, "Projekts"));
   querySnapshot.forEach((doc) => {
     api.push( doc.data());
     setData(api)
   });
   return querySnapshot
 };
 getApi()
  return (
    <div>
      <p>hh</p>
      {Data
        ? Data?.map((e : any) => {
            return <p key={Math.random()}>{e.title}</p>;
          })
        : ""} 
    </div>
  );
}

export default Test;
