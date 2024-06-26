"use client";
import { Module, ModuleWiseDistribution } from "@/@types/types";
import moduleWiseDistribution from "@/data/moduleWiseDistribution";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Animate from "./ui/Animate";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChapterWiseReport() {
  return (
    <div className=" md:col-span-8 order-5 md:order-4 lg:col-span-4 shadow-sm border px-4 py-2 md:row-span-2 bg-white rounded-xl md:rounded-3xl">
      <div className="font-semibold text-center text-xl text-gray-500">
        Questions Solved
      </div>
      <hr className="my-2" />
      <div className="flex flex-col mt-6 justify-between gap-4">
        {moduleWiseDistribution.map(
          (x: ModuleWiseDistribution, index: number) => {
            return (
              <>
                <ModuleDiv key={index} data={x} />
                {index >= 0 && index < moduleWiseDistribution.length - 1 && (
                  <hr key={index + 1} />
                )}
              </>
            );
          }
        )}
      </div>
    </div>
  );
}

function ModuleDiv({ data }: { data: ModuleWiseDistribution }) {
  const label = data.data.map((x: Module) => x.name);
  const values = data.data.map((x: Module) => x.question);
  return (
    <div>
      <div className="font-semibold text-xl text-gray-600 text-center">
        {data.name}
      </div>
      <div className="flex z-20 gap-2 justify-center mt-4">
        <Animate>
          <ChartDiv labels={label} values={values} />
        </Animate>
        <div className="flex-1 h-full px-4 flex flex-col gap-3 p-1">
          {data.data.map((x: Module, index: number) => (
            <div
              key={index}
              className="flex text-lg justify-between font-[700] text-gray-500"
            >
              <div>{x.name}</div>
              <div className="text-black">{x.question}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartDiv({ labels, values }: { labels: string[]; values: number[] }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Value",
        data: values,
        backgroundColor: ["#fdba74", "#fcd34d", "#4ade80"],
        borderWidth: 0,
      },
    ],
  };
  const options = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  const total = values.reduce((a, b) => a + b, 0);
  return (
    <div className="flex-1 h-[120px] w-[120px] relative mx-auto">
      <span className="absolute text-4xl font-extrabold top-[40px] z-0 left-[38px] ">
        {total}
      </span>
      <Doughnut options={options} data={chartData} />
    </div>
  );
}
