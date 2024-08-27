type QuestionProps = {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
};

export default function Question({
  question,
  options,
  onAnswer,
}: QuestionProps) {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button key={option} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
