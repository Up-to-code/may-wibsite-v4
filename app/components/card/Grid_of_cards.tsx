"use client";
import { db } from "@/app/Firebase/db";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState, lazy } from "react";
import Link from "next/link";
import { useProjcts } from "@/app/Store/Projcts_Store";
import { usePathname } from "next/navigation";

const LazyCard = lazy(() => import("./Card"));

function Grid_of_cards() {
  const { Projcts, setAllProjcts } = useProjcts();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProjcts = async () => {
      if (Projcts.length === 0) {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "Projekts"));
        const Projcts_data = querySnapshot.docs.map((doc) => doc.data());
        setAllProjcts(Projcts_data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    getProjcts();
  }, [Projcts, setAllProjcts]);

  // Loading skeleton structure
  const renderLoading = (
   
      [...Array(4)].map((_, index) => (
        <div key={index} className="animate-pulse space-y-4 w-[320px] m-auto p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ">
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="bg-gray-300 h-6 w-3/4 rounded-md "></div>
          <div className="bg-gray-300 h-6 w-1/2 rounded-md "></div>
        </div>
      ))
   
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {isLoading ? (
          renderLoading
        ) : (
          <>
            {pathname === "/"
              ? Projcts?.slice(0, 4).map((e: any, index: number) => (
                  <LazyCard
                    key={index}
                    title_art={e.title}
                    url={e.id}
                    urlImage={e.Imageurl}
                  />
                ))
              : Projcts?.map((e: any, index: number) => (
                  <LazyCard
                    key={index}
                    title_art={e.title}
                    url={e.id}
                    urlImage={e.Imageurl}
                  />
                ))}
          </>
        )}
      </div>

      {pathname === "/" && Projcts?.length > 4 && (
        <div className="flex justify-center mt-8">
          <Link
            href="/Projects"
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            More Projects
          </Link>
        </div>
      )}
    </div>
  );
}

export default Grid_of_cards;
