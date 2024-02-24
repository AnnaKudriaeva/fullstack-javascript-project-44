import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

function getQuestionAndAnswer() {
  const number1 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const number2 = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const expression = `${number1} ${number2}`;
  console.log(`Question: ${expression}`);
  const num = number1 <= number2 ? number1 : number2;
  const gcd = (min, num1, num2) => {
    if (num1 % min === 0 && num2 % min === 0) {
      return min;
    }
    return gcd(min - 1, num1, num2);
  };

  const correctAnswer = gcd(num, number1, number2);
  return correctAnswer;
}

export default function runGcd() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
