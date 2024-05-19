export interface UserData {
  name: string;
  country: string;
  email: string;
  graduation: string;
  totalQuestions: number;
  currentStreak: number;
  maxStreak: number;
}
export interface DailyDistribution {
  date: string;
  numberOfQuestions: number;
}

export interface Module {
  sNo: string;
  division: string;
  question: number;
}

export interface ModuleWiseDistribution {
  module1: Module[];
  module2: Module[];
}

export interface TestDistribution {
  chapter: number;
  numberOfTests: number;
}

export interface TestScore {
  testName: string;
  testScore: number;
}

export interface ScoreDistribution {
  chapter1: TestScore[];
  chapter2: TestScore[];
  chapter3: TestScore[];
}

export interface TestScores {
  totalTest: number;
  testDistribution: TestDistribution[];
  scoreDistribution: ScoreDistribution;
}

export interface TopicAnalysis {
  topic: string;
  count: number;
}

export interface ChapterRanking {
  chapter: string;
  currentRanking: number;
  minRanking: number;
}
