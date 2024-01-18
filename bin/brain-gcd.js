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
  console.log('Find the greatest common divisor of given numbers.');
}

function isNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const expression = `${number1} ${number2}`;
  let num = number1 >= number2 ? number2 : number1;
  let correctAnswer;

  while (num > 0) {
    if (number1 % num === 0 && number2 % num === 0) {
      correctAnswer = num;
    }
    num -= 1;
  }
  console.log(`Question: ${expression}`);
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
