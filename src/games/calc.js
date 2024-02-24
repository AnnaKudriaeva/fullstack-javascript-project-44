import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'What is the result of the expression?';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function getQuestionAndAnswer() {
  const number1 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const operators = ['+', '-', '*'];
  const chosenOperator = operators[generateRandom(0, operators.length)];
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
      throw new Error(`Unknown operator: ${chosenOperator}`);
  }
}

export default function runCalc() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
