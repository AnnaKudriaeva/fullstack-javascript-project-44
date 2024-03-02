import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'What is the result of the expression?';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const calculateExpression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation in func calculateExpression: '${operation}' !`);
  }
};

function getQuestionAndAnswer() {
  const number1 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const operators = ['+', '-', '*'];
  const chosenOperator = operators[generateRandom(0, operators.length)];
  console.log(`Question: ${number1} ${chosenOperator} ${number2}`);
  const correctAnswer = calculateExpression(number1, number2, chosenOperator);
  return correctAnswer;
}

export default function runCalc() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
