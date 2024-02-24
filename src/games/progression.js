import game from '../engine.js';
import generateRandom from '../utils.js';

const DESCRIPTION = 'What number is missing in the progression?';
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

function getQuestionAndAnswer() {
  const startValue = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const difference = generateRandom(MIN_NUMBER, MAX_NUMBER);
  const numElements = 10;
  const progression = Array.from({ length: numElements }, (_, i) => startValue + i * difference);
  const indexToReplace = generateRandom(0, progression.length);
  const correctAnswer = progression[indexToReplace];
  progression[indexToReplace] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  return correctAnswer;
}

export default function runProgression() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
