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
    labels: chapter.testScores.map((item) => item),
    datasets: [
      {
        label: "Test Score",
        data: chapter.testScores.map((item) => item.testScore),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
  console.log(selectedData);

  return (
    <div className="md:col-span-3 flex flex-col justify-center items-center relative shadow-sm border p-2 bg-white rounded-xl md:rounded-3xl">
      {selectedData ? (
        <div className="flex top-2 left-4 absolute w-fit gap-20">
          <div className="flex text-center flex-col gap-2">
            <span className="text-xl font-semibold text-gray-500">
              Test Score
            </span>
            <span className="text-3xl font-extrabold">
              {selectedData.value}
            </span>
          </div>
          <div className="flex flex-col ">
            <p className="text-sm text-gray-400 font-semibold">
              {data.labels[selectedData.index].date}
            </p>
            <p className="font-bold">
              {data.labels[selectedData.index].testName}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-500">
          Click on a data point to view details
        </div>
      )}

      <div
        className={`md:w-full ${
          selectedData && "mt-10"
        } items-end flex justify-center h-[140px]   mx-auto`}
      >
        <Line width={240} height={100} options={options} data={data} />
      </div>
    </div>
  );
}

function DisplayTestDetails() {}
