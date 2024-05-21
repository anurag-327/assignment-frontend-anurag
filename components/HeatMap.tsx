"use client";
import { monthlydata, providedData } from "@/data/dailyDistribution";
import userData from "@/data/userData";
import { Tooltip } from "react-tooltip";
import CalendarHeatmap from "react-calendar-heatmap";
import HeatMap, { HeatMapValue } from "@uiw/react-heat-map";
import "react-calendar-heatmap/dist/styles.css";
import { getMonthStartEndDates } from "@/utils/helper";
import { poppins } from "@/fonts/font";

export default function HeatMapPage() {
  return (
    <div className="md:col-span-8 order-2 lg:col-span-6 py-2 md:px-4 px-2  lg:px-4 shadow-sm border bg-white rounded-xl md:rounded-3xl flex justify-center items-center">
      <div className="flex w-full flex-col overflow-scroll items-center md:items-start justify-center sm:flex-row gap-6">
        <div className="flex order-2 sm:order-1 w-full flex-col flex-1 h-full justify-center items-center">
          <MapHeader />
          <Map />
        </div>
        <div className="flex flex-col order-1 sm:order-2 gap-2 items-center">
          <StreakData />
        </div>
      </div>
    </div>
  );
}

function MapHeader() {
  const total = providedData.reduce((acc, value) => acc + value.count, 0);
  return (
    <div className="flex sm:flex-row flex-col gap-1 sm:gap-6 px-2 lg:px-4 w-full justify-between">
      <div>
        <span className="text-sm font-semibold text-black">
          {total}{" "}
          <span className="text-gray-500 text-sm">
            submissions in past 6 months
          </span>
        </span>
      </div>
      <div>
        <span className="text-xs font-semibold text-gray-400">
          Total Active Days:{" "}
          <span className="text-black">{providedData.length}</span>
        </span>
      </div>
    </div>
  );
}
function Map() {
  return (
    <div className="flex gap-2 mt-4 md:max-w-[400px] lg:max-w-[420px] justify-center w-full no-scrollbar overflow-scroll">
      {Array.from(monthlydata.keys()).map((monthKey, index) => {
        const monthData = monthlydata.get(monthKey);
        const { startDate, endDate } = getMonthStartEndDates(monthKey);
        return (
          <div key={monthKey} className="">
            <h2 className="w-[60px]"></h2>
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={monthData}
              classForValue={(value: any) => {
                if (!value) {
                  return "color-empty";
                }
                if (value.count > 10) {
                  return `color-scale-10`;
                }
                return `color-scale-${value.count}`;
              }}
              tooltipDataAttrs={(value: HeatMapValue) => ({
                "data-tooltip-id": "tooltip",
                "data-tooltip-content":
                  value.date != null && value.count > 0
                    ? `${value.count} submissions on ${value.date}`
                    : `No submissions found`,
              })}
            />
            <Tooltip id="tooltip" />
          </div>
        );
      })}
    </div>
  );
}
function StreakData() {
  return (
    <>
      <div>
        <span className="text-xs font-semibold text-gray-400">
          Current Streak:{" "}
          <span className="text-black">{userData.currentStreak}</span>
        </span>
      </div>
      <div className="flex sm:mt-4 flex-col gap-1 text-center">
        <span className={`text-6xl ${poppins.className} font-extrabold`}>
          {userData.maxStreak}
        </span>
        <span className="text-xs font-semibold text-gray-600">Max. Streak</span>
      </div>
    </>
  );
}
