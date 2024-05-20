"use client";

import chapterWiseData from "@/data/chapterWiseData";
import useStore from "@/zustand/useStore.store";

export default function TestReport() {
  const totaltests = chapterWiseData.reduce(
    (acc, chapter) => acc + chapter.totalTests,
    0
  );
  const chapterData = useStore((state) => state.chapter);
  const setChapter = useStore((state) => state.setChapter);
  return (
    <div className="md:col-span-3 shadow-sm border flex gap-2 p-8 bg-white rounded-xl  md:rounded-3xl">
      <div className="flex w-fit px-6  items-center gap-2 flex-col">
        <div className="font-semibold text-lg text-gray-500">Total Test</div>
        <div>
          <span className="text-6xl font-extrabold">{totaltests}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-1">
        {chapterWiseData.map((chapter, index) => (
          <button
            key={chapter.chapter}
            className={`${
              chapterData.chapter === chapter.chapter && "bg-gray-100"
            } p-1 rounded-md hover:bg-gray-100 font-semibold text-lg text-gray-500`}
            onClick={() => setChapter(chapter)}
          >
            {chapter.chapter}
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
