"use client";
import { Poppins } from "next/font/google";
import chapterWiseData from "@/data/chapterWiseData";
import useStore from "@/zustand/useStore.store";
import { poppins } from "@/fonts/font";

export default function TestReport() {
  const totaltests = chapterWiseData.reduce(
    (acc, chapter) => acc + chapter.totalTests,
    0
  );
  const chapterData = useStore((state) => state.chapter);
  const setChapter = useStore((state) => state.setChapter);
  return (
    <div className="md:col-span-8 order-3 lg:col-span-4 shadow-sm border flex sm:gap-8 gap-2 p-8 bg-white rounded-xl items-center  md:rounded-3xl">
      <div className="flex w-fit px-6  items-center gap-2 flex-col">
        <div className="font-semibold text-lg text-gray-500">Total Test</div>
        <div>
          <span
            className={`text-6xl ${poppins.className} font-sans font-extrabold`}
          >
            {totaltests}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {chapterWiseData.map((chapter, index) => (
          <button
            key={chapter.chapter}
            className={`${
              chapterData.chapter === chapter.chapter && "bg-gray-100 border"
            } p-1 rounded-md flex px-4 justify-between hover:bg-gray-100 font-[600] text-lg text-gray-600`}
            onClick={() => setChapter(chapter)}
          >
            <span className=""> {chapter.chapter}</span>
            <span className="text-black">{chapterData.totalTests}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Score({ score }: { score: number }) {
  return (
    <div>
      <div className="font-semibold text-lg text-gray-500">Total Questions</div>
      <div>
        <span className="text-5xl font-extrabold">{score}</span>
      </div>
    </div>
  );
}
