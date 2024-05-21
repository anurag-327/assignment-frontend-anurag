# Documentation for Monthly Activity Heatmap Implementation

## Table of Contents

1. [Introduction](#introduction)
2. [Data Preparation](#data-preparation)
3. [Heatmap Component](#heatmap-component)
4. [Rendering the Heatmap](#rendering-the-heatmap)
5. [Challenges and Solutions](#challenges-and-solutions)
6. [Future Improvements](#future-improvements)

## Introduction

This documentation outlines the process of creating a monthly activity heatmap for a student dashboard using Next.js, TypeScript,React Calendar Heatmap. The focus is on the preparation of data, implementation of the heatmap component, and rendering the heatmap with monthly grouped data.

## Data Preparation

### Step 1: Import Necessary Modules and Data

We start by importing necessary types and utility functions. The provided data contains daily activity logs which need to be processed into a format suitable for the heatmap.

### Step 2: Define Data Structure

The `DailyDistribution` type represents each day’s activity with a date and count.

```typescript
import { DailyDistribution } from "@/@types/types";
import { formatDate, groupDataByMonth } from "@/utils/helper";
```

### Step 3: Provided Data

The `providedData` array contains the initial activity data.

```typescript
const providedData: DailyDistribution[] = [
  { date: "2024/04/10", count: 1 },
  { date: "2024/04/11", count: 2 },
  // ... more data
];
```

### Step 4: Generate Daily Distribution

Generate a list of the last 180 days, initializing with zero counts.

```typescript
const days = 180;
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
```

### Step 5: Merge Provided Data with Daily Distribution

Create a map for the provided data and merge it with the generated daily distribution to ensure all dates have corresponding activity counts.

```typescript
const providedDataMap = new Map(
  providedData.map((item) => [item.date, item.count])
);

const heatMapData = dailyDistribution.map((item) => {
  if (providedDataMap.has(item.date)) {
    return { date: item.date, count: providedDataMap.get(item.date) };
  }
  return item;
});
```

### Step 6: Group Data by Month

Group the daily activity data by month for easier rendering in the heatmap.

```typescript
export const monthlydata = groupDataByMonth(heatMapData);
```

## Heatmap Component

### Step 1: Import React Calendar Heatmap

Import the `react-calendar-heatmap` component and necessary styles.

```typescript
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
```

### Step 2: Define Heatmap Rendering Logic

Loop through the monthly data and render a heatmap for each month.

```typescript
{
  Array.from(monthlydata.keys()).map((monthKey) => {
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
            "data-tooltip-content": `${value.count} submissions on ${value.date}`,
          })}
        />
        <Tooltip id="tooltip" />
      </div>
    );
  });
}
```

## Rendering the Heatmap

### Step 1: Iterate Over Monthly Data

Iterate over the grouped monthly data and render a `CalendarHeatmap` component for each month.

### Step 2: Define Start and End Dates

Extract the start and end dates for each month using a utility function `getMonthStartEndDates`.

### Step 3: Configure Heatmap Appearance

Configure the heatmap appearance using the `classForValue` function to apply different color scales based on the activity count.

### Step 4: Add Tooltips

Use the `tooltipDataAttrs` property to add tooltips, displaying the number of submissions on each date.

## Challenges and Solutions

### Challenge 1: Data Formatting

- **Solution:** Ensure consistent date formatting using the `formatDate` utility.

### Challenge 2: Handling Empty Data

- **Solution:** Initialize daily distribution with zero counts and merge with provided data to ensure all dates are covered.

### Challenge 3: Tooltip Integration

- **Solution:** Use `tooltipDataAttrs` to add custom tooltips for each date in the heatmap.

## Future Improvements

- **Dynamic Date Range:** Allow users to select a custom date range for the heatmap.
- **Enhanced Tooltips:** Provide more detailed information in tooltips, such as specific challenges solved.
- **Performance Optimization:** Optimize data processing and rendering for larger datasets.

## Conclusion

This documentation provides a comprehensive guide to implementing a monthly activity heatmap using Next.js, TypeScript, and React components. The steps outlined ensure a clear understanding of data preparation, component implementation, and rendering logic, offering a valuable reference for similar projects.
