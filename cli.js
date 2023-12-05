import readlineSync from 'readline-sync';
export default function greetUser() {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('Mai I have your name?');
    console.log(`Hello, ${userName}!`);
}