import game from '../engine.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function getQuestionAndAnswer() {
  const number = Math.floor(Math.random() * 99) + 2;
  console.log(`Question: ${number}`);
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      isPrime = false;
    }
  }
  const correctAnswer = isPrime ? 'yes' : 'no';
  return correctAnswer;
}

export default function runPrime() {
  game(DESCRIPTION, getQuestionAndAnswer);
}
