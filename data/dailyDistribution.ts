import { DailyDistribution } from "@/@types/types";
const days = 180;
export const providedData: DailyDistribution[] = [
  { date: "2024/04/10", count: 1 },
  { date: "2024/04/11", count: 2 },
  { date: "2024/04/12", count: 0 },
  { date: "2024/04/13", count: 3 },
  { date: "2024/04/14", count: 4 },
  { date: "2024/04/15", count: 3 },
  { date: "2024/04/16", count: 4 },
  { date: "2024/04/17", count: 5 },
  { date: "2024/04/18", count: 5 },
  { date: "2024/04/19", count: 2 },
  { date: "2024/04/20", count: 4 },
  { date: "2024/04/21", count: 1 },
  { date: "2024/04/22", count: 4 },
  { date: "2024/04/23", count: 3 },
  { date: "2024/04/24", count: 4 },
  { date: "2024/04/25", count: 1 },
  { date: "2024/04/26", count: 2 },
  { date: "2024/04/27", count: 0 },
  { date: "2024/04/28", count: 0 },
  { date: "2024/04/29", count: 1 },
  { date: "2024/04/30", count: 4 },
  { date: "2024/05/01", count: 3 },
  { date: "2024/05/02", count: 5 },
  { date: "2024/05/03", count: 5 },
  { date: "2024/05/04", count: 4 },
  { date: "2024/05/05", count: 3 },
  { date: "2024/05/06", count: 4 },
  { date: "2024/05/07", count: 4 },
  { date: "2024/05/08", count: 4 },
  { date: "2024/05/09", count: 4 },
  { date: "2024/05/10", count: 4 },
  { date: "2024/05/11", count: 5 },
  { date: "2024/05/12", count: 3 },
  { date: "2024/05/13", count: 1 },
  { date: "2024/05/14", count: 0 },
  { date: "2024/05/15", count: 0 },
  { date: "2024/05/16", count: 0 },
  { date: "2024/05/17", count: 5 },
  { date: "2024/05/18", count: 3 },
  { date: "2024/05/19", count: 2 },
  { date: "2024/05/20", count: 4 },
  { date: "2024/05/21", count: 4 },
  { date: "2024/05/22", count: 4 },
  { date: "2024/05/23", count: 0 },
  { date: "2024/05/24", count: 4 },
  { date: "2024/05/25", count: 1 },
  { date: "2024/05/26", count: 4 },
  { date: "2024/05/27", count: 3 },
  { date: "2024/05/28", count: 4 },
  { date: "2024/05/29", count: 5 },
  { date: "2024/05/30", count: 4 },
  { date: "2024/05/31", count: 4 },
  { date: "2024/06/01", count: 0 },
  { date: "2024/06/02", count: 1 },
  { date: "2024/06/03", count: 2 },
];

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const lastDate = new Date(providedData[providedData.length - 1].date);

const dailyDistribution: DailyDistribution[] = Array.from(
  { length: days },
  (_, index) => {
    const date = new Date(lastDate);
    date.setDate(date.getDate() - days + index);
    return {
      date: formatDate(date),
      count: 0,
    };
  }
);

const providedDataMap = new Map(
  providedData.map((item) => [item.date, item.count])
);

const heatMapData = dailyDistribution.map((item) => {
  if (providedDataMap.has(item.date)) {
    return { date: item.date, count: providedDataMap.get(item.date) };
  }
  return item;
});

const groupDataByMonth = (data: any) => {
  const monthMap = new Map();

  data.forEach(({ date, count }: DailyDistribution) => {
    const [year, month] = date.split("/").slice(0, 2);
    const monthKey = `${year}/${month}`;

    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, []);
    }
    monthMap.get(monthKey).push({ date, count });
  });

  return monthMap;
};
export const monthlydata = groupDataByMonth(heatMapData);
export default heatMapData;
// export monthlydata;
