import userData from "@/data/userData";
import { poppins } from "@/fonts/font";

export default function TotalQuestions() {
  return (
    <div className="col-span-1 mt-4 md:mt-0 order-1 md:col-span-8 lg:col-span-2 border shadow-sm p-2 gap-2 flex justify-center items-center flex-col bg-white rounded-xl md:rounded-3xl">
      <div className="font-semibold text-lg text-gray-500">Total Questions</div>
      <div>
        <span className={`text-6xl ${poppins.className} font-extrabold`}>
          {userData.totalQuestions}
        </span>
      </div>
    </div>
  );
}
