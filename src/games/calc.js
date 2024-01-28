import game from '../engine.js';

const DESCRIPTION = 'What is the result of the expression?';

function getQuestionAndAnswer() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const chosenOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${number1} ${chosenOperator} ${number2}`);
  let correctAnswer;
  switch (chosenOperator) {
    case '+':
      correctAnswer = number1 + number2;
      return correctAnswer;
    case '-':
      correctAnswer = number1 - number2;
      return correctAnswer;
    case '*':
      correctAnswer = number1 * number2;
      return correctAnswer;
    default:
  }
  return correctAnswer;
}

export default function runCalc() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
