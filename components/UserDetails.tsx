"use client";
import chapterWiseData from "@/data/chapterWiseData";
import userData from "@/data/userData";
import useStore from "@/zustand/useStore.store";
import {
  CaretDown,
  CaretUp,
  Envelope,
  EnvelopeSimple,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export default function UserDetails() {
  return (
    <div className="md:w-[300px] w-full p-4 bg-white border shadow-sm md:rounded-3xl rounded-xl">
      <div className="flex gap-2">
        <div className="">
          <Image
            src="/user.jpg"
            alt="User"
            width={80}
            height={80}
            className=""
          />
        </div>
        <div className="flex flex-col gap-1 justify-end">
          <h3 className=" text-2xl md:text-xl font-semibold">
            {userData.name}
          </h3>
          <span className=" text-sm md:text-xs text-gray-600 font-semibold">
            Last Updated: 20 May 2024
          </span>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="w-6 overflow-hidden">
            <Image src="/india.png" alt="India" width={30} height={30} />
          </div>
          <span className="text-sm">India</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <GraduationCap size={24} />
          </div>
          <span className="text-sm">{userData.graduation}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Envelope size={24} />
          </div>
          <a href="mailto:anuragsrivastav0027@gmail.com" className="text-sm">
            anuragsrivastav0027@gmail.com
          </a>
        </div>
      </div>
      <hr className="my-4" />
      <div className="p-2 mt-6 bg-gray-100 rounded-md font-semibold text-gray-500 text-xl">
        Overall stats
      </div>
      <hr className="my-4" />
      <ChapterWiseReportStats />
    </div>
  );
}

function ChapterWiseReportStats() {
  const chapterData = useStore((state) => state.chapter);
  const setChapter = useStore((state) => state.setChapter);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className="mt-1">
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold text-gray-600">
          Chapter wise stats
        </h4>
        <button>
          {showDropdown ? (
            <CaretUp
              onClick={() => setShowDropdown(!showDropdown)}
              weight="bold"
              size={20}
            />
          ) : (
            <CaretDown
              onClick={() => setShowDropdown(!showDropdown)}
              weight="bold"
              size={20}
            />
          )}
        </button>
      </div>
      {showDropdown && (
        <div className="flex flex-1 mt-2 flex-col justify-between gap-1">
          {chapterWiseData.map((chapter, index) => (
            <li key={chapter.chapter} className="ml-6 list-none">
              <button
                key={chapter.chapter}
                className={`p-1 rounded-md hover:bg-gray-100 font-[450] text-gray-500`}
                onClick={() => setChapter(chapter)}
              >
                {chapter.chapter}
              </button>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
