"use client";
import { Module, ModuleWiseDistribution } from "@/@types/types";
import moduleWiseDistribution from "@/data/moduleWiseDistribution";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Animate from "./ui/Animate";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChapterWiseReport() {
  return (
    <div className="md:col-span-4 shadow-sm border px-4 py-2 md:row-span-2 bg-white rounded-xl md:rounded-3xl">
      <div className="font-semibold text-center text-xl text-gray-500">
        Questions Solved
      </div>
      <hr className="my-2" />
      <div className="flex flex-col mt-6 justify-between gap-4">
        {moduleWiseDistribution.map(
          (x: ModuleWiseDistribution, index: number) => {
            return (
              <>
                <ModuleDiv key={x.name} data={x} />
                {index >= 0 && index < moduleWiseDistribution.length - 1 && (
                  <hr />
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
      <div className="flex gap-2 justify-center mt-4">
        <Animate>
          <ChartDiv labels={label} values={values} />
        </Animate>
        <div className="flex-1 h-full px-4 flex flex-col gap-3 p-1">
          {data.data.map((x: Module) => (
            <div
              key={x.name}
              className="flex text-lg justify-between font-[550] text-gray-500"
            >
              <div>{x.name}</div>
              <div>{x.question}</div>
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
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Adjust colors as needed
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderWidth: 1,
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
