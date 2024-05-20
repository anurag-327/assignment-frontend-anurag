import { ChapterRanking } from "@/@types/types";
import chapter1 from "@/public/chapter1.png";
import chapter2 from "@/public/chapter2.png";
import chapter3 from "@/public/chapter3.png";
const chapterWiseRanking: ChapterRanking[] = [
  {
    chapter: "Chapter 1",
    currentRanking: 2892,
    minRanking: 1982,
    image: chapter1,
  },
  {
    chapter: "Chapter 2",
    currentRanking: 2395,
    minRanking: 2395,
    image: chapter2,
  },
  {
    chapter: "Chapter 3",
    currentRanking: 1233,
    minRanking: 709,
    image: chapter3,
  },
];

export default chapterWiseRanking;
