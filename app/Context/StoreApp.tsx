// "use client";

// import {
//   DocumentData,
//   QueryDocumentSnapshot,
//   QuerySnapshot,
//   collection,
//   getDocs,
// } from "firebase/firestore";
// import {
//   Dispatch,
//   SetStateAction,
//   createContext,
//   useEffect,
//   useState,
// } from "react";
// import { db } from "../Firebase/db";

// interface StoreAppProps {
//   Api: DocumentData[];
//   setApi: Dispatch<SetStateAction<DocumentData[]>>;

// }

// export const ApiStore = createContext<StoreAppProps | null>(null);


// const StoreApp = ({ children }: { children: React.ReactNode }) => {
//   let api: DocumentData[] = [];
//   const [Api, setApi] = useState(api);

//   const getApi = async () => {
//      const querySnapshot = await getDocs(collection(db, "Projekts"));
//     querySnapshot.forEach((doc) => {
//       api.push(doc.data());
//     });
//     return querySnapshot
//   };
//     getApi();
//   useEffect(() => {
//     setApi(api);
//   }, []);

//   return (
//     <ApiStore.Provider value={{ Api, setApi }}>
//       {children}
//     </ApiStore.Provider>
//   );
// };

// export default StoreApp;
