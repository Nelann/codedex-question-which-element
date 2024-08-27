import { useEffect, useState } from "react";

import Question from "@/components/question";
import Results from "@/components/results";

import { fetchArtwork } from "@/utils/api";
import { elements, keywords, questions } from "@/utils/data";
import type { ArtWork } from "@/types/artwork";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [element, setElement] = useState<string>("");
  const [artwork, setArtwork] = useState<ArtWork | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const determineElement = (answers: string[]) => {
    const counts: Record<string, number> = {};
    answers.forEach((answer) => {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);

      const keyword = keywords[selectedElement];
      if (keyword) {
        fetchArtwork(keyword)
          .then((data) => {
            setArtwork(data);
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err);
          });
      }
    }
  }, [currentQuestionIndex, answers]);

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <Results
          element={element}
          artwork={artwork}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
}
