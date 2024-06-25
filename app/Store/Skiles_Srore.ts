import { DocumentData } from "firebase/firestore";
import { create } from "zustand";

interface Skiles {
  Skiles: DocumentData[];
  setAllSkiles: (Skiles: DocumentData[]) => void;
}

export const useSkiles = create<Skiles>((set) => ({
  Skiles: [],
  setAllSkiles: (Skiles) => set({ Skiles }),
}));
