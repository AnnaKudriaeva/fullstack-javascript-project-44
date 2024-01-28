import game from '../engine.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

function getQuestionAndAnswer() {
  const number = Math.floor(Math.random() * 100) + 2;
  console.log(`Question: ${number}`);
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
}

export default function runEven() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
