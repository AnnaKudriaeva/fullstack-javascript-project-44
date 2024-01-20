import game from '../src/engine.js';

function rule() {
  console.log('What number is missing in the progression?');
}

function isNumber() {
  const startValue = Math.floor(Math.random() * 10) + 1;
  const difference = Math.floor(Math.random() * 5) + 1;
  const numElements = 10;
  const progression = Array.from({ length: numElements }, (_, i) => startValue + i * difference);
  const indexToReplace = Math.floor(Math.random() * progression.length);
  const replacedNumber = progression[indexToReplace];
  progression[indexToReplace] = '..';
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  return replacedNumber;
}

export default function runGameProgression() {
  game(rule, isNumber);
}
