import { DocumentData } from "firebase/firestore";
import { create } from "zustand";

interface Skill extends DocumentData {
  id: string;
  // Add other specific fields here if known
}

interface SkillsState {
  skills: Skill[];
  setAllSkills: (skills: Skill[]) => void;
}

export const useSkills = create<SkillsState>((set) => ({
  skills: [],
  setAllSkills: (skills) => set({ skills }),
}));