import readlineSync from 'readline-sync';

const ATTEMPTS_COUNT = 3;

export default function game(description, getQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let n = 0; n < ATTEMPTS_COUNT; n += 1) {
    const correctAnswer = getQuestionAndAnswer();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toString().toLowerCase() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
