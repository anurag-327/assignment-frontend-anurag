"use client";
interface type {
  label: string;
  index: number;
  value: number;
}
import useStore from "@/zustand/useStore.store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  Filler,
} from "chart.js";
import { useCallback, useState } from "react";
import { Line } from "react-chartjs-2";
import Animate from "./ui/Animate";
import { poppins } from "@/fonts/font";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export default function Rating() {
  const chapter = useStore((state) => state.chapter);
  const [selectedData, setSelectedData] = useState<type | null>(null);
  const data = {
    labels: chapter.testScores.map((item) => `${item.testName}-${item.date}`),
    datasets: [
      {
        label: "Test Score",
        data: chapter.testScores.map((item) => item.testScore),
        borderColor: "#fdba74",
        backgroundColor: "#fb923c",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.raw;
            setSelectedData((prevSelectedData) => {
              // Only update state if it's different from the previous state
              if (
                !prevSelectedData ||
                prevSelectedData.label !== label ||
                prevSelectedData.value !== value ||
                prevSelectedData.index !== tooltipItem.dataIndex
              ) {
                return { label, value, index: tooltipItem.dataIndex };
              }
              return prevSelectedData;
            });
            return `${label}: ${value}`;
          },
        },
      },
    },
  };
  return (
    <div className="md:col-span-8 order-4 md:order-5 lg:col-span-4 flex flex-col justify-center items-center relative shadow-sm border p-2 md:p-4 bg-white rounded-xl w-full md:rounded-3xl">
      {selectedData ? (
        <div className="flex top-2 left-4 absolute w-fit gap-20">
          <div className="flex text-center flex-col">
            <span className="text-lg font-semibold text-gray-600">
              Test Score
            </span>
            <span className={`text-3xl font-extrabold ${poppins.className}`}>
              {selectedData.value}
            </span>
          </div>
          <div className="flex flex-col ">
            <p className="text-sm text-gray-400 font-semibold">
              {data.labels[selectedData.index].split("-")[1]}
            </p>
            <p className="font-bold">
              {data.labels[selectedData.index].split("-")[0]}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-sm w-full text-center text-gray-500">
          Click on a data point to view details
        </div>
      )}

      <Animate>
        <div
          className={`${
            selectedData && "mt-16"
          } items-end flex mt-5 justify-center w-[280px] overflow-scroll md:w-[500px] h-[200px] lg:w-[400px] lg:h-[140px] mx-auto`}
        >
          <Line options={options} data={data} />
          <span className="text-xs absolute left-10 text-gray-400">2023</span>
          <span className="text-xs -ml-10 md:-ml-4 text-gray-400">2024</span>
        </div>
      </Animate>
    </div>
  );
}

function DisplayTestDetails() {}
