import game from '../src/engine.js';

function rule() {
  console.log('What is the result of the expression?');
}

function isNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const chosenOperator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;

  switch (chosenOperator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }

  console.log(`Question: ${number1} ${chosenOperator} ${number2}`);
  return correctAnswer;
}

export default function runGameCalc() {
  game(rule, isNumber);
}
