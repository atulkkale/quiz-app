import { useRef } from "react";

export default function Answers({
  answers,
  selectedAns,
  answerState,
  onSelect,
}) {
  let shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((ans) => {
        let cssClass;
        let isSelected = ans === selectedAns ? true : false;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={ans} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(ans, "selected")}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
