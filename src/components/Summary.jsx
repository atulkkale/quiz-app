import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((ans) => !ans);
  const correctAns = userAnswers.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );

  const skippedAnsShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );
  const correctAnsShare = Math.round(
    (correctAns.length / userAnswers.length) * 100
  );
  const wrongAnsShare = Math.round(100 - skippedAnsShare - correctAnsShare);

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, index) => {
          let cssClasses = "user-answer";

          if (!ans) {
            cssClasses += " skipped";
          } else if (ans === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{ans || "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
