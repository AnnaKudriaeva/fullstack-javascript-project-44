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
    if (parseFloat(userAnswer) === correctAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
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
