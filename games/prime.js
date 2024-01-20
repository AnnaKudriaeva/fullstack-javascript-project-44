import game from '../src/engine.js';

function rule() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function isNumber() {
  const number = Math.floor(Math.random() * 99) + 2;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  const correctAnswer = isPrime ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  return correctAnswer;
}

export default function runGamePrime() {
  game(rule, isNumber);
}
