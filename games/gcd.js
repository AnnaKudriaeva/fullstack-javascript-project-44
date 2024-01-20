import game from '../src/engine.js';

function rule() {
  console.log('Find the greatest common divisor of given numbers.');
}

function isNumber() {
  const number1 = Math.floor(Math.random() * 100) + 2;
  const number2 = Math.floor(Math.random() * 100) + 2;
  const expression = `${number1} ${number2}`;
  let num = number1 <= number2 ? number1 : number2;
  let correctAnswer;
  while (num > 0) {
    if (number1 % num === 0 && number2 % num === 0) {
      correctAnswer = num;
      break;
    }
    num -= 1;
  }
  console.log(`Question: ${expression}`);
  return correctAnswer;
}

export default function runGameGcd() {
  game(rule, isNumber);
}
