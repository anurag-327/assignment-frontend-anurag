import { ChapterRanking } from "@/@types/types";
import chapterWiseRanking from "@/data/chapterWiseRanking";
import Image from "next/image";

export default function Ranking() {
  return (
    <div className="md:col-span-3 shadow-sm border row-span-2 p-2 bg-white rounded-xl md:rounded-3xl">
      <div className="font-semibold text-center text-xl text-gray-500">
        Ranking
      </div>
      <hr className="my-2" />
      <div className="">
        {chapterWiseRanking.map((data, index) => (
          <>
            <Module data={data} />
            {index >= 0 && index < chapterWiseRanking.length - 1 && (
              <hr className="my-2 w-[60%] mx-auto" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function Module({ data }: { data: ChapterRanking }) {
  function getComment(ranking: number) {
    if (ranking > 2600) return "Very Good";
    if (ranking > 2000 && ranking < 2599) return "Good";
    if (ranking > 1500 && ranking < 1999) return "Excellent";
    return "Average";
  }
  return (
    <div>
      <div className="text-gray-500 font-semibold text-center">
        {data.chapter}
      </div>
      <div className="flex mt-2 gap-16 justify-center items-center">
        <div>
          <Image width={100} height={100} src={data.image} alt={data.chapter} />
        </div>
        <div className="flex flex-col text-center">
          <span className="text-4xl font-extrabold">{data.currentRanking}</span>
          <span>(min: {data.minRanking})</span>
          <span>{getComment(data.currentRanking)}</span>
        </div>
      </div>
    </div>
  );
}
