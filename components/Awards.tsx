"use client";
import { Badge } from "@/@types/types";
import awards from "@/data/awards";
import badges from "@/data/badges";
import { X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";
export default function Awards() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="md:col-span-4 p-4 shadow-sm border bg-white rounded-xl md:rounded-3xl">
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : (
        <div>
          <h3 className="text-2xl font-semibold text-gray-500">Awards</h3>
          <div className="grid grid-cols-4 w-full">
            {awards.map((award, index) => (
              <div key={award.id}>
                <Image src={award.image} alt={award.title} />
              </div>
            ))}
          </div>
          <div className="flex mt-3 text-gray-500 text-sm flex-col  text-center">
            <span>...</span>
            <button onClick={() => setShowModal(true)} className="-mt-1">
              show more
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Modal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed z-50 flex items-center justify-center w-screen h-screen top-0 left-0 bg-black overlay bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
      <div className="md:max-w-lg md:min-w-[600px] rounded-2xl z-20 opacity-100 md:p-8 p-4 bg-white mx-auto">
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-semibold">Awards List</span>
          <button onClick={() => setShowModal(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-4 w-full  justify-center items-center">
          {badges.map((award, index) => (
            <Card data={award} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ data }: { data: Badge }) {
  return (
    <div className="flex relative group flex-col gap-1">
      <div>
        <Image
          className="w-14 h-14 mx-auto"
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="flex flex-col gap-1 text-center text-xs">
        <span>
          {data.title.slice(0, 10)}
          {data.title.length > 10 && "..."}
        </span>
        <span className="text-gray-500">{data.date}</span>
      </div>
      <div className="absolute w-fit hidden group-hover:block bg-white text-xs border rounded-sm bottom-3  whitespace-nowrap  px-1 py-0.5">
        {data.title}
      </div>
    </div>
  );
}
