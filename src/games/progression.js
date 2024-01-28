import game from '../engine.js';

const DESCRIPTION = 'What number is missing in the progression?';

function getQuestionAndAnswer() {
  const startValue = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 5) + 1;
  const numElements = 10;
  const progression = Array.from({ length: numElements }, (_, i) => startValue + i * difference);
  const indexToReplace = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[indexToReplace];
  progression[indexToReplace] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  return correctAnswer;
}

export default function runProgression() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
