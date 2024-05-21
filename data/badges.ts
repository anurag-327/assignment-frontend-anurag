import { Badge } from "@/@types/types";
import { award } from "@/@types/types";
import award1 from "../public/award1.png";
import award2 from "../public/award2.png";
import award3 from "../public/award3.png";
import award4 from "../public/award4.png";
import knight from "@/public/knight.png";
import progskill from "@/public/progskill.jpg";
import dsskill from "@/public/dsskill.jpg";
import panda from "@/public/panda.png";
import thirtydaysofpanda from "@/public/30daysofpanda.png";
import thirtydaysofc from "@/public/30daysofc.jpg";
import fiftydays2024 from "@/public/50days2024.png";
import fiftydays2023 from "@/public/50days2023.png";
import hundereddays from "@/public/100days.png";
import annualbadge2021 from "@/public/annualbadge2021.png";
import annualbadge2022 from "@/public/annualbadge2022.png";
import annualbadge2023 from "@/public/annualbadge2023.png";
import janbadge from "@/public/janbadge.png";
import febbadge from "@/public/febbadge.png";
import marbadge from "@/public/marchbadge.png";
import aprbadge from "@/public/aprbadge.png";
const badges: Badge[] = [
  {
    id: 16,
    image: award1,
    date: "2024-01-01",
    title: "Award 1",
  },
  {
    id: 17,
    image: award2,
    date: "2024-01-01",
    title: "Award2",
  },
  {
    id: 18,
    image: award3,
    date: "2024-01-01",
    title: "Award3",
  },
  {
    id: 19,
    image: award4,
    title: "Award4",
    date: "2024-01-01",
  },
  {
    id: 1,
    title: "Knight",
    date: "2024-01-01",
    image: knight,
  },

  {
    id: 8,
    title: "100 Days Badge",
    date: "2024-06-01",
    image: hundereddays,
  },
  {
    id: 7,
    title: "50 Days Badge 2024",
    date: "2024-06-01",
    image: fiftydays2024,
  },
  {
    id: 7,
    title: "50 Days Badge 2023",
    date: "2024-06-01",
    image: fiftydays2023,
  },
  {
    id: 9,
    title: "Annual Badge 2023",
    date: "2024-06-01",
    image: annualbadge2023,
  },
  {
    id: 10,
    title: "Annual Badge 2022",
    date: "2024-06-01",
    image: annualbadge2022,
  },
  {
    id: 11,
    title: "Annual Badge 2021",
    date: "2024-06-01",
    image: annualbadge2021,
  },
  {
    id: 12,
    title: "April Badge",
    date: "2024-06-01",
    image: aprbadge,
  },

  {
    id: 13,
    title: "March Badge",
    date: "2024-06-01",
    image: marbadge,
  },
  {
    id: 14,
    title: "February Badge",
    date: "2024-06-01",
    image: febbadge,
  },
  {
    id: 15,
    title: "January Badge",
    date: "2024-06-01",
    image: janbadge,
  },
  {
    id: 2,
    title: "Programming Skill",
    date: "2024-02-01",
    image: progskill,
  },
  {
    id: 3,
    title: "Data Structure Badge",
    date: "2024-03-01",
    image: dsskill,
  },
  {
    id: 4,
    title: "Panda Badge",
    date: "2024-03-01",
    image: panda,
  },
  {
    id: 5,
    title: "30 Days of Panda",
    date: "2024-04-01",
    image: thirtydaysofpanda,
  },
  {
    id: 6,
    title: "30 Days of Code",
    date: "2024-05-01",
    image: thirtydaysofc,
  },
];

export default badges;
