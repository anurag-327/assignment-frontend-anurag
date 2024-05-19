import Awards from "@/components/Awards";
import ChapterWiseReport from "@/components/ChapterWiseReport";
import HeatMap from "@/components/HeatMap";
import ModuleWiseReport from "@/components/ModuleWiseReport";
import Ranking from "@/components/Ranking";
import Rating from "@/components/Rating";
import TopicAnalysis from "@/components/TopicAnalysis";
import TotalQuestions from "@/components/TotalQuestions";
import UserDetails from "@/components/UserDetails";

export default function Home() {
  return (
    <main className="py-4 px-4 s-full min-h-screen md:max-w-5xl mx-auto flex md:flex-row flex-col gap-2 md:gap-6">
      <UserDetails />
      <div className="flex-1 h-screen md:gap-6 grid grid-cols-1  md:grid-cols-6 md:grid-rows-6">
        <TotalQuestions />
        <HeatMap />
        <ChapterWiseReport />
        <ModuleWiseReport />
        <Rating />
        <Awards />
        <Ranking />
        <TopicAnalysis />
      </div>
    </main>
  );
}

// grid lg:grid-cols-6 grid-rows-5 w-full md:max-w-5xl
