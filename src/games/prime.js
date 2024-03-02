import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const isPrime = (number) => {
  let prime = true;
  const limit = Math.sqrt(number);
  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

function getQuestionAndAnswer() {
  const question = generateRandom(MIN_NUMBER, MAX_NUMBER);
  console.log(`Question: ${question}`);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return correctAnswer;
}

export default function runPrime() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
