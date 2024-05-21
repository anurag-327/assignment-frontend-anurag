import Awards from "@/components/Awards";
import ChapterWiseReport from "@/components/ChapterWiseReport";
import HeatMapPage from "@/components/HeatMap";
import Ranking from "@/components/Ranking";
import Rating from "@/components/Rating";
import TestReport from "@/components/TestReport";
import TopicAnalysis from "@/components/TopicAnalysis";
import TotalQuestions from "@/components/TotalQuestions";
import UserDetails from "@/components/UserDetails";

export default function Home() {
  return (
    <main className="w-full mt-14 mb-10">
      <div className="mx-auto w-fit px-3 md:px-0">
        <UserDetails />
        <div className="flex-1 md:ml-[318px]  md:max-w-4xl gap-4 lg:gap-4 grid grid-cols-1 md:grid-cols-8 md:grid-rows-5">
          <TotalQuestions />
          <HeatMapPage />
          <TestReport />
          <ChapterWiseReport />
          <Rating />
          <Awards />
          <Ranking />
          <TopicAnalysis />
        </div>
      </div>
    </main>
  );
}

// grid lg:grid-cols-6 grid-rows-5 w-full md:max-w-5xl
