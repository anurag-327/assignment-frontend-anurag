import { DailyDistribution } from "@/@types/types";
import { providedData } from "@/data/dailyDistribution";
const days = 180;

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

export const groupDataByMonth = (data: any) => {
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

export const getMonthStartEndDates = (monthKey: string) => {
  const [year, month] = monthKey.split("/").map(Number);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  return { startDate, endDate };
};
