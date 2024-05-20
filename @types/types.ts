import { StaticImageData } from "next/image";

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
  count: number;
}

export interface Module {
  name: string;
  question: number;
}

export interface ModuleWiseDistribution {
  name: string;
  data: Module[];
}

export interface TestDistribution {
  chapter: number;
  numberOfTests: number;
}

export interface TestScore {
  testName: string;
  testScore: number;
  date: string;
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
  image: StaticImageData;
}

export interface data {
  chapter: string;
  currentRanking: number;
  minRanking: number;
  testScores: TestScore[];
  totalTests: number;
}

export interface award {
  id: string;
  image: StaticImageData;
  title: string;
}

export interface Badge {
  id: number;
  title: string;
  date: string;
  image: StaticImageData;
}

export interface HeatmapValue {
  date: string;
  count: number;
}
