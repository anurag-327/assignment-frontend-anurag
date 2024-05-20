"use client";
import providedData, { monthlydata } from "@/data/dailyDistribution";
import userData from "@/data/userData";
import { Tooltip as ReactTooltip } from "react-tooltip";
import CalendarHeatmap from "react-calendar-heatmap";
import HeatMap, { HeatMapValue } from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import "react-calendar-heatmap/dist/styles.css";

const getMonthStartEndDates = (monthKey: string) => {
  const [year, month] = monthKey.split("/").map(Number);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  return { startDate, endDate };
};

export default function HeatMapPage() {
  return (
    <div className="lg:col-span-6 py-2 md:px-4 px-2 lg:px-8 shadow-sm border bg-white rounded-xl md:rounded-3xl flex justify-center items-center">
      <div className="flex flex-wrap w-full overflow-scroll items-center justify-center flex-row gap-6">
        <div className="flex w-full flex-col flex-1 h-full justify-center">
          <MapHeader />
          <Map />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <StreakData />
        </div>
      </div>
    </div>
  );
}

function MapHeader() {
  return (
    <div className="flex gap-6 px-2 lg:px-4 w-full justify-between">
      <div>
        <span className="text-sm font-semibold text-black">
          67{" "}
          <span className="text-gray-500 text-sm">
            submissions in past 6 months
          </span>
        </span>
      </div>
      <div>
        <span className="text-xs font-semibold text-gray-400">
          Total Active Days: <span className="text-black">35</span>
        </span>
      </div>
    </div>
  );
}
function Map() {
  return (
    <div className="flex gap-2 mt-4 md:max-w-[400px] lg:max-w-[420px] mx-auto w-full no-scrollbar overflow-scroll">
      {Array.from(monthlydata.keys()).map((monthKey) => {
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
              tooltipDataAttrs={(value: HeatMapValue) => {
                return {
                  "data-tip": `${value.date}: ${value.count} activities`,
                };
              }}
            />
            <Tooltip />
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
      <div className="flex mt-4 flex-col gap-1 text-center">
        <span className="text-6xl font-extrabold">{userData.maxStreak}</span>
        <span className="text-xs font-semibold text-gray-600">Max. Streak</span>
      </div>
    </>
  );
}
{
  /* <HeatMap
              value={monthData}
              startDate={startDate}
              endDate={endDate}
              weekLabels={false}
              monthPlacement="bottom"
              rectRender={(props, data) => {
                return (
                  <Tooltip
                    placement="top"
                    content={`count: ${data.count || 0}`}
                  >
                    <rect {...props} />
                  </Tooltip>
                );
              }}
              panelColors={{
                0: "#f4decd",
                2: "#e4b293",
                4: "#d48462",
                10: "#c2533a",
                20: "#ad001d",
                30: "#000",
              }}
            /> */
}

// function Map2() {
//   return (
//     <div className="mt-4">
//       <CalendarHeatmap
//         startDate={getDateXDaysAgo(204)}
//         endDate={today}
//         values={providedData}
//         classForValue={(value) => {
//           if (!value) {
//             return "color-empty";
//           }
//           return `color-scale-${value.count}`;
//         }}
//         tooltipDataAttrs={(value) => {
//           return {
//             "data-tip": `${value.date}: ${value.count} activities`,
//           };
//         }}
//         showWeekdayLabels={false}
//       />
//     </div>
//   );
// }
