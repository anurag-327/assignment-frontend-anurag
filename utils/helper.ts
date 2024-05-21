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

export function countDaysWithPositiveCount(data: DailyDistribution[]) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].count > 0) {
      count++;
    }
  }
  return count;
}

export function getDaysInMonth(month: string) {
  const [year, monthIndex] = month.split("/").map(Number);
  const nextMonth = new Date(year, monthIndex, 1);
  nextMonth.setDate(0);
  return nextMonth.getDate();
}

export function formatMonth(monthString: any) {
  const [year, monthIndex] = monthString.split("/");
  const month = new Date(year, parseInt(monthIndex, 10) - 1).toLocaleDateString(
    "en-US",
    { month: "short" }
  );
  return month;
}
