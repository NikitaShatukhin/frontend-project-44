#!/usr/bin/env mode

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswerCount = 0;

    while (correctAnswerCount < 3) {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your Answer: ');

        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

        if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log(`'${userAnswer}' is a wrong input. Please answer with 'yes' or 'no'.`);
            break;
        }

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswerCount += 1;
        } else {
            console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }

    if (correctAnswerCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }

};

playEvenGame();