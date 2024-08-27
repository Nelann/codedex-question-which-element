import type { Keyword } from "@/types/keyword";
import type { Question } from "@/types/question";

export const questions: Question[] = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
];

export const keywords: Keyword = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};

export const elements: Record<string, string> = {
  "Red 🔴": "Fire",
  "Blue 🔵": "Water",
  "Green 🟢": "Earth",
  "Yellow 🟡": "Air",
};
