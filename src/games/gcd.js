import game from '../engine.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

function getQuestionAndAnswer() {
  const number1 = Math.floor(Math.random() * 100) + 2;
  const number2 = Math.floor(Math.random() * 100) + 2;
  const expression = `${number1} ${number2}`;
  console.log(`Question: ${expression}`);
  let num = number1 <= number2 ? number1 : number2;
  let correctAnswer;
  while (num > 0) {
    if (number1 % num === 0 && number2 % num === 0) {
      correctAnswer = num;
      return correctAnswer;
    }
    num -= 1;
  }
  return correctAnswer;
}

export default function runGcd() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
