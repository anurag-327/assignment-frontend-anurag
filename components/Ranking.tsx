import { ChapterRanking } from "@/@types/types";
import chapterWiseRanking from "@/data/chapterWiseRanking";
import { poppins } from "@/fonts/font";
import Image from "next/image";

export default function Ranking() {
  return (
    <div className="md:col-span-8 order-7 lg:col-span-4 shadow-sm border row-span-2 p-2 bg-white rounded-xl md:rounded-3xl">
      <div className="font-semibold text-center text-xl text-gray-500">
        Ranking
      </div>
      <hr className="my-2" />
      <div>
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
          <Image
            className="scale-110"
            width={90}
            height={90}
            src={data.image}
            alt={data.chapter}
          />
        </div>
        <div className="flex text-sm flex-col text-center">
          <span className={` ${poppins.className} text-3xl font-extrabold`}>
            {data.currentRanking}
          </span>
          <span>(min: {data.minRanking})</span>
          <span>{getComment(data.currentRanking)}</span>
        </div>
      </div>
    </div>
  );
}
