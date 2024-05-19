import {
  Envelope,
  EnvelopeSimple,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function UserDetails() {
  return (
    <div className="md:w-[300px] shadow-sm w-full p-4 bg-white rounded-2xl">
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
            Siddharth Singh
          </h3>
          <span className=" text-sm md:text-xs text-gray-600 font-semibold">
            Last Updated: 18 May 2024
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
          <span className="text-sm">Delhi Technical University</span>
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
    </div>
  );
}
