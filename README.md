# Student Dashboard Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Project Structure](#project-structure)
6. [Components](#components)
   - [Line and Donut Charts Implementation](#charts)
   - [Daily Activity Heatmap](#activity-heatmap)

## Introduction

This documentation provides an overview of the LeetCode-type student dashboard built using Next.js, TypeScript, React Chart.js 2, and React Calendar Heatmap. The dashboard is designed to help students track their coding activity and visualize their progress through various interactive charts and heatmaps.

## Features

- **Interactive Charts:** Display coding activity and progress through dynamic charts.
- **Daily Activity Heatmap:** Visual representation of daily coding activity.
- **Responsive Design:** Accessible on different devices with a responsive layout.
- **User Authentication:** Secure login and registration system (optional).

## Technologies Used

- **Next.js:** Framework for server-side rendering and static site generation.
- **TypeScript:** Superset of JavaScript providing static type-checking.
- **React Chart.js 2:** Library for creating charts using Chart.js in React.
- **React Calendar HeatMap:** Library for creating daily activity heatmap
- **Zustand:** Library for state management.

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 12.0.0)
- npm or yarn

### Steps

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your-username/student-dashboard.git
   cd student-dashboard
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser:**
   Open [http://localhost:3000](http://localhost:3000) to see the application in action.

## Project Structure

```
assignment-frontend-anurag/
├── app/
│   ├── globals.css
|   ├── layout.tsx
|   ├── page.tsx
├── components/
│   ├── HeatMapPage.tsx
│   ├── TopicAnalysis.tsx
│   ├── UserDetails.tsx
├── data/
│   ├── dailyDistribution.ts
│   ├── topicAnalysis.ts
│   ├──UserData.tsx
    ├── badges.tsx
├── public/
│   └── images/
├── @types/
│   └── types.ts
├── utils/
│   └── helper.ts
├── fonts/
│   └── fonts.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Components

# Line and Donut Charts Implementation

## Overview

In this project, I utilized the `react-chartjs-2` library to create interactive and visually appealing charts. Specifically, I implemented line charts and donut charts to display various aspects of student activity data. Here’s a brief explanation of how each type of chart was implemented and used.

## Technology Used

- **react-chartjs-2:** A React wrapper for the Chart.js library, which is used for creating charts.

## Implementation

1. **Installation:** The `react-chartjs-2` and `chart.js` libraries were installed to provide the necessary tools for creating charts.
2. **Component Creation:** A Line Chart component was created using the `Line` component from `react-chartjs-2`. This component was configured to accept data and options as props, making it reusable for different datasets.

3. **Data Preparation:** Data for the line chart was structured to include labels (representing time periods) and datasets (representing the activity data over those periods). The datasets included information such as data points, background color, and border color.

4. **Customization:** Chart options were defined to customize the appearance and behavior of the line chart. This included settings like scales, grid lines, and tooltips.

### Benefits

- **Line Chart:** Helped in identifying trends and patterns in daily coding activities over time.
- **Donut Chart:** Provided a clear visual representation of the distribution of different types of coding activities, making it easy to compare proportions.

# Daily Activity Heatmap Implementation

## Introduction

This documentation outlines the process of creating a monthly activity heatmap for a student dashboard using Next.js, TypeScript, and React Calendar Heatmap. The focus is on the preparation of data, implementation of the heatmap component, and rendering the heatmap with monthly grouped data.

## Data Preparation

### Step 1: Import Necessary Modules and Data

We start by importing necessary types and utility functions. The provided data contains daily activity logs which need to be processed into a format suitable for the heatmap.

### Step 2: Define Data Structure

The `DailyDistribution` type represents each day’s activity with a date and count.

### Step 3: Provided Data

The `providedData` array contains the initial activity data.

### Step 4: Generate Daily Distribution

Generate a list of the last 180 days, initializing with zero counts. This ensures that we have a complete dataset, even if some days have no activity recorded.

### Step 5: Merge Provided Data with Daily Distribution

Create a map for the provided data and merge it with the generated daily distribution. This step ensures that all dates within the specified range have corresponding activity counts, filling in gaps where necessary.

### Step 6: Group Data by Month

Group the daily activity data by month for easier rendering in the heatmap. This step simplifies the visualization by organizing data into monthly segments.

## Heatmap Component

### Step 1: Import React Calendar Heatmap

Import the `react-calendar-heatmap` component along with its styles. This library facilitates the creation of calendar-based heatmaps.

### Step 2: Define Heatmap Rendering Logic

Loop through the monthly data and render a heatmap for each month. This involves iterating over the grouped data and using the `CalendarHeatmap` component to visualize it.

## Rendering the Heatmap

### Step 1: Iterate Over Monthly Data

Iterate over the grouped monthly data and render a `CalendarHeatmap` component for each month. This involves dynamically creating heatmaps based on the available data.

### Step 2: Define Start and End Dates

Extract the start and end dates for each month using a utility function. This ensures that each heatmap accurately represents the data for its respective month.

### Step 3: Configure Heatmap Appearance

Configure the heatmap appearance using the `classForValue` function to apply different color scales based on the activity count. This provides a visual cue for different levels of activity.

### Step 4: Add Tooltips

Use the `tooltipDataAttrs` property to add tooltips, displaying the number of submissions on each date. This enhances the user experience by providing additional context.

## Challenges and Solutions

### Challenge 1: Data Formatting

**Solution:** Ensure consistent date formatting using a utility function. This avoids issues with date mismatches and inconsistencies in the heatmap.

### Challenge 2: Handling Empty Data

**Solution:** Initialize the daily distribution with zero counts and merge it with the provided data. This approach ensures that no dates are missing from the heatmap.

### Challenge 3: Tooltip Integration

**Solution:** Use `tooltipDataAttrs` to add custom tooltips for each date in the heatmap. This provides users with detailed information about their activity.
