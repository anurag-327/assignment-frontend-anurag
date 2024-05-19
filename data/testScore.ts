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
      { testName: "Weeklytest1", testScore: 45 },
      { testName: "Weeklytest2", testScore: 34 },
      { testName: "Weeklytest3", testScore: 56 },
      { testName: "Weeklytest4", testScore: 67 },
      { testName: "Weeklytest5", testScore: 12 },
      { testName: "Weeklytest6", testScore: 98 },
    ],
    chapter2: [
      { testName: "Weeklytest1", testScore: 45 },
      { testName: "Weeklytest2", testScore: 34 },
      { testName: "Weeklytest3", testScore: 56 },
      { testName: "Weeklytest4", testScore: 67 },
      { testName: "Weeklytest5", testScore: 12 },
      { testName: "Weeklytest6", testScore: 98 },
      { testName: "Weeklytest7", testScore: 34 },
      { testName: "Weeklytest8", testScore: 78 },
    ],
    chapter3: [
      { testName: "Weeklytest1", testScore: 45 },
      { testName: "Weeklytest2", testScore: 34 },
      { testName: "Weeklytest3", testScore: 56 },
      { testName: "Weeklytest4", testScore: 67 },
      { testName: "Weeklytest5", testScore: 12 },
      { testName: "Weeklytest6", testScore: 98 },
      { testName: "Weeklytest7", testScore: 102 },
      { testName: "Weeklytest8", testScore: 56 },
      { testName: "Weeklytest9", testScore: 89 },
    ],
  },
};

export default testScores;
