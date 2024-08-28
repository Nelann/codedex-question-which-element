import type { Keyword } from "@/types/keyword";
import type { Question } from "@/types/question";

export const questions: Question[] = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
  {
    question: "What's your favorite season?",
    options: ["Spring 🌸", "Summer ☀️", "Fall 🍂", "Winter ❄️"],
  },
  {
    question: "What's your favorite animal?",
    options: ["Tiger 🐅", "Penguin 🐧", "Bear 🐻", "Eagle 🦅"],
  },
  {
    question: "What's your preferred time of day?",
    options: ["Morning 🌅", "Afternoon 🌞", "Evening 🌇", "Night 🌙"],
  },
  {
    question: "What's your go-to comfort food?",
    options: ["Pizza 🍕", "Ice cream 🍦", "Mac and cheese 🧀", "Chocolate 🍫"],
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
  "Summer ☀️": "Fire",
  "Tiger 🐅": "Fire",
  "Pizza 🍕": "Fire",
  "Afternoon 🌞": "Fire",

  "Blue 🔵": "Water",
  "Spring 🌸": "Water",
  "Penguin 🐧": "Water",
  "Ice cream 🍦": "Water",
  "Night 🌙": "Water",

  "Green 🟢": "Earth",
  "Fall 🍂": "Earth",
  "Bear 🐻": "Earth",
  "Mac and cheese 🧀": "Earth",
  "Evening 🌇": "Earth",

  "Yellow 🟡": "Air",
  "Winter ❄️": "Air",
  "Eagle 🦅": "Air",
  "Chocolate 🍫": "Air",
  "Morning 🌅": "Air",
};
