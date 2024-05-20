"use client";
import providedData from "@/data/dailyDistribution";
import heatMapData from "@/data/dailyDistribution";
import userData from "@/data/userData";
import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
export default function HeatMapPage() {
  // console.log(heatMapData);
  const value = [
    { date: "2016/01/11", count: 2 },
    { date: "2016/04/12", count: 2 },
    { date: "2016/05/01", count: 5 },
    { date: "2016/05/02", count: 5 },
    { date: "2016/05/03", count: 1 },
    { date: "2016/05/04", count: 11 },
    { date: "2016/05/08", count: 32 },
  ];

  return (
    <div className="md:col-span-4 p-2 shadow-sm border bg-white rounded-xl md:rounded-3xl flex justify-center items-center">
      <div className="flex gap-2">
        <div>
          <div className="flex justify-between px-2">
            <div>
              <span className="text-xs font-semibold text-black">
                67{" "}
                <span className="text-gray-600">
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
          <HeatMap
            value={value}
            width={400}
            startDate={new Date("2024/04/01")}
            weekLabels={false}
            monthPlacement="bottom"
            rectRender={(props, data) => {
              return (
                <Tooltip placement="top" content={`count: ${data.count || 0}`}>
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
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div>
            <span className="text-xs font-semibold text-gray-400">
              Current Streak:{" "}
              <span className="text-black">{userData.currentStreak}</span>
            </span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-6xl font-extrabold">
              {userData.maxStreak}
            </span>
            <span className="text-xs font-semibold text-gray-600">
              Max. Streak
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
