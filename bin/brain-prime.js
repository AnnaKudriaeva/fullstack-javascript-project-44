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

function yourAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

function game() {
  const name = welcomeUser();
  rule();
  let n = 0;
  while (n < 3) {
    const correctAnswer = isNumber();
    const userAnswer = yourAnswer();
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
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
