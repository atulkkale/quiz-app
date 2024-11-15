import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";

export default function Question({
  onSkipAnswer,
  onSelectAnswer,
  activeQuestionIndex,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: null,
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAns(ans) {
    setAnswer({
      selectedAnswer: ans,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: ans,
        isCorrect: ans === QUESTIONS[activeQuestionIndex].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(ans);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        onTimeout={!answer.selectedAnswer ? onSkipAnswer : null}
        timeout={timer}
        key={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS[activeQuestionIndex]?.text}</h2>
      <Answers
        answers={QUESTIONS[activeQuestionIndex]?.answers}
        selectedAns={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAns}
      />
    </div>
  );
}
