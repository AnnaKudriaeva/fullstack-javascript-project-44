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
  console.log('What is the result of the expression?');
}

function isNumber() {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const chosenOperator = operators[Math.floor(Math.random() * operators.length)];
  let correctAnswer;

  switch (chosenOperator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }

  console.log(`Question: ${number1} ${chosenOperator} ${number2}`);
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
      //      continue;
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
