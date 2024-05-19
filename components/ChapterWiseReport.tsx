"use client";

import chapterWiseRanking from "@/data/chapterWiseRanking";

export default function ChapterWiseReport() {
  return (
    <div className="md:col-span-3 p-2 bg-white rounded-xl">
      <div>
        <div></div>
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
