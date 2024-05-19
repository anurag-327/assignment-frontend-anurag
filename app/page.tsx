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
    <main className="mt-6 grid lg:grid-cols-6 grid-rows-5 w-full md:max-w-5xl mx-auto">
      <UserDetails />
      <TotalQuestions />
      <HeatMap />
      <ChapterWiseReport />
      <ModuleWiseReport />
      <Rating />
      <Awards />
      <Ranking />
      <TopicAnalysis />
    </main>
  );
}
