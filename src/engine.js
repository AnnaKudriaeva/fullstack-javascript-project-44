import readlineSync from 'readline-sync';

const NUMBER_OF_ATTEMPTS = 3;

function greet() {
  console.log('Welcome to the Brain Games!');
}

function welcomeUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function yourAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export default function game(rule, isNumber) {
  greet();
  const name = welcomeUser();
  rule();
  let n = 0;
  while (n < NUMBER_OF_ATTEMPTS) {
    const correctAnswer = isNumber();
    const userAnswer = yourAnswer();
    if (userAnswer.toString().toLowerCase() === correctAnswer.toString()) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (n === NUMBER_OF_ATTEMPTS) {
    console.log(`Congratulations, ${name}!`);
  }
}
