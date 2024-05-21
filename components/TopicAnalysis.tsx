"use client";
import topicWiseData from "@/data/topicAnalysis";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);
export default function TopicAnalysis() {
  const labels = topicWiseData.slice(0, 10).map((data) => data.topic);
  const values = topicWiseData.slice(0, 10).map((data) => data.count);
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
          "rgba(255, 0, 0, 0.6)", // Bold red color
          "rgba(0, 255, 0, 0.6)", // Bold green color
        ],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        display: false,
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="md:col-span-8 order-8 lg:col-span-4 shadow-sm border px-6 bg-white rounded-xl md:rounded-3xl">
      <h3 className="text-xl font-semibold text-gray-500">Topic Analysis</h3>
      {
        // @ts-ignore
        <Bar data={chartData} options={options} />
      }
    </div>
  );
}
