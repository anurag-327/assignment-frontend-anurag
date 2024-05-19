import userData from "@/data/userData";

export default function TotalQuestions() {
  return (
    <div className="md:col-span-2 p-4 gap-2 flex justify-center items-center flex-col bg-white rounded-xl">
      <div className="font-semibold text-lg text-gray-500">Total Questions</div>
      <div>
        <span className="text-5xl font-extrabold">
          {userData.totalQuestions}
        </span>
      </div>
    </div>
  );
}
