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
    <main className="py-4 px-4 lg:px-0 w-full md:max-w-6xl mx-auto flex lg:flex-row flex-col gap-4 lg:gap-6">
      <UserDetails />
      <div className="flex-1 gap-4 lg:gap-6 grid grid-cols-1  lg:grid-cols-8 lg:grid-rows-5">
        <TotalQuestions />
        <HeatMapPage />
        <TestReport />
        <ChapterWiseReport />
        <Rating />
        <Awards />
        <Ranking />
        <TopicAnalysis />
      </div>
    </main>
  );
}

// grid lg:grid-cols-6 grid-rows-5 w-full md:max-w-5xl
