import { data } from "@/@types/types";
import chapterWiseData from "@/data/chapterWiseData";
import { create } from "zustand";
interface store {
  chapter: data;
  setChapter: (chapter: data) => void;
}
const useStore = create<store>()((set) => ({
  chapter: chapterWiseData[0],
  setChapter: (chapter: data) => set({ chapter }),
}));
export default useStore;
