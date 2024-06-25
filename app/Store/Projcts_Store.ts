import { DocumentData } from "firebase/firestore";
import { create } from "zustand";

interface Projcts {
  Projcts: DocumentData[];
  setAllProjcts: (Projcts: DocumentData[]) => void;
}

export const useProjcts = create<Projcts>((set) => ({
  Projcts: [],
  setAllProjcts: (Projcts) => set({ Projcts }),
}));
