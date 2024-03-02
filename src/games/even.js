import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

function getQuestionAndAnswer() {
  const question = generateRandom(MIN_NUMBER, MAX_NUMBER);
  console.log(`Question: ${question}`);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return correctAnswer;
}

export default function runEven() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
