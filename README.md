# Quiz App

The **Quiz App** is a React-based web application where users answer multiple-choice questions within a 10-second time limit. The app includes a timer, visual feedback for correct/incorrect answers, and a detailed report card at the end, displaying performance stats such as skipped, correctly answered, and incorrectly answered questions.

## Features

- **Timer**: Each question has a 10-second countdown displayed as a blue progress bar.
- **Answer Selection**: 
  - The user selects one of four answers.
  - When an answer is chosen, the background of the progress bar and the selected answer turns orange for one second.
  - After one second, the progress bar returns to blue.
  - If the answer is correct, the selected answer's background turns green for 2 seconds.
  - If the answer is incorrect, the selected answer's background turns red for 2 seconds.
- **Skipping Questions**: If the user doesn't answer within the 10-second time limit, the question gets skipped, and the user is moved to the next question.
- **Answer Feedback**: 
  - Correct answers are highlighted in green.
  - Incorrect answers are highlighted in red.
  - Skipped answers are marked as "skipped".
- **Progress Report**: 
  - At the end of the quiz, the user receives a report card.
  - The report shows the percentage of skipped, correctly answered, and incorrectly answered questions.
  - The user also sees all the questions with their selected answers, with correct answers highlighted in green and incorrect answers in red.

## Technologies Used

- React.js
- CSS for styling
- JavaScript for application logic

## How It Works

1. The quiz starts with the first question, and a 10-second timer begins.
2. The user selects an answer before the timer runs out.
3. Feedback is displayed for the selected answer, and the progress bar resets.
4. After answering or skipping, the user is forwarded to the next question.
5. The quiz ends after all questions have been answered or skipped, and the report card is displayed with the results.

## Live Demo

You can try the live version of the app hosted on [Vercel](https://quiz-rush-react.vercel.app/).

## How to Run Locally

To run the project locally:

1. Clone the repository:
   
```bash
git clone https://github.com/atulkkale/quiz-rush.git
cd quiz-rush
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```bash
http://localhost:5173
```

## Future Improvements

- Add a timer pause/resume functionality.
- Add user authentication and save progress.
- Support for more question categories or types.
- Improve question randomization for a dynamic experience.

## Enjoy the quiz and let me know your feedback!

## Screenshots

<img width="1680" alt="Screenshot 2024-11-16 at 8 12 54 PM" src="https://github.com/user-attachments/assets/a30b22f3-67f3-4ddc-bac1-70d62a8d4a57">

<img width="1680" alt="Screenshot 2024-11-16 at 8 12 35 PM" src="https://github.com/user-attachments/assets/4830d939-ee14-4ed9-8859-fffc710cf5ec">
