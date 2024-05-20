import { TestScores } from "@/@types/types";

const testScores: TestScores = {
  totalTest: 23,
  testDistribution: [
    { chapter: 1, numberOfTests: 6 },
    { chapter: 2, numberOfTests: 8 },
    { chapter: 3, numberOfTests: 9 },
  ],
  scoreDistribution: {
    chapter1: [
      { testName: "Weekly Test 1", testScore: 45, date: "01 Jan 2023" },
      { testName: "Weekly Test 2", testScore: 34, date: "08 Jan 2023" },
      { testName: "Weekly Test 3", testScore: 56, date: "15 Jan 2023" },
      { testName: "Weekly Test 4", testScore: 67, date: "22 Jan 2023" },
      { testName: "Weekly Test 5", testScore: 12, date: "29 Jan 2023" },
      { testName: "Weekly Test 6", testScore: 98, date: "05 Feb 2023" },
    ],
    chapter2: [
      { testName: "Weekly Test 1", testScore: 45, date: "01 Jan 2023" },
      { testName: "Weekly Test 2", testScore: 34, date: "08 Jan 2023" },
      { testName: "Weekly Test 3", testScore: 56, date: "15 Jan 2023" },
      { testName: "Weekly Test 4", testScore: 67, date: "22 Jan 2023" },
      { testName: "Weekly Test 5", testScore: 12, date: "29 Jan 2023" },
      { testName: "Weekly Test 6", testScore: 98, date: "05 Feb 2023" },
      { testName: "Weekly Test 7", testScore: 34, date: "12 Feb 2023" },
      { testName: "Weekly Test 8", testScore: 78, date: "19 Feb 2023" },
    ],
    chapter3: [
      { testName: "Weekly Test 1", testScore: 45, date: "01 Jan 2023" },
      { testName: "Weekly Test 2", testScore: 34, date: "08 Jan 2023" },
      { testName: "Weekly Test 3", testScore: 56, date: "15 Jan 2023" },
      { testName: "Weekly Test 4", testScore: 67, date: "22 Jan 2023" },
      { testName: "Weekly Test 5", testScore: 12, date: "29 Jan 2023" },
      { testName: "Weekly Test 6", testScore: 98, date: "05 Feb 2023" },
      { testName: "Weekly Test 7", testScore: 102, date: "12 Feb 2023" },
      { testName: "Weekly Test 8", testScore: 56, date: "19 Feb 2023" },
      { testName: "Weekly Test 9", testScore: 89, date: "26 Feb 2023" },
    ],
  },
};

export default testScores;
