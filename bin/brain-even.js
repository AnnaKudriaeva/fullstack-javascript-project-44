#!/usr/bin/env node

import readlineSync from 'readline-sync';

function greet() {
  console.log('Welcome to the Brain Games!');
}

function welcomeUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function rule() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function isNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  return number;
}

function yourAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function game() {
  const name = welcomeUser();
  rule();
  let n = 0;
  while (n < 3) {
    const number = isNumber();
    const answer = yourAnswer();
    if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
      console.log('Correct!');
      n += 1;
    } else {
      const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (n === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

function main() {
  greet();
  game();
}

main();
