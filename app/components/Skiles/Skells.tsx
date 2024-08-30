"use client";
import { useEffect, Suspense, lazy } from "react";
import Container from "../public_compnets/Container";
import Image from "next/image";
import { Get_image } from "@/public/Get_image";
import { db } from "@/app/Firebase/db";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { useSkiles } from "@/app/Store/Skiles_Srore";

const LazySkile = lazy(() => import("./Skile"));

function Skiles() {
  const { Skiles, setAllSkiles } = useSkiles();
  useEffect(() => {
    const getSkiles = async () => {
      if (Skiles.length === 0) {
        const querySnapshot = await getDocs(collection(db, "Skiles"));
        const skiles_data = querySnapshot.docs.map((doc) => doc.data());
        setAllSkiles(skiles_data);
      }
    };
    getSkiles();
  }, [Skiles.length > 0]);

  return (
    <div className="min-h-[400px] bg-black w-full">
      <Container>
        <div className="flex items-center min-h-[400px]  justify-evenly ">
          <div className="h-full ">
            <Image
              src={Get_image.me_img1}
              alt="me"
              width={"100"}
              className=" flitr    "
              loading="lazy"
            ></Image>
          </div>
          <Suspense
            fallback={
              <div className="skiltos loading text-white">Loading...</div>
            }
          >
            <div className="flex gap-3 flex-wrap w-72  ">
              {Skiles.map((e: DocumentData) => {
                return <LazySkile sk={e.Skile} key={e.id} />;
              })}
            </div>
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

export default Skiles;
