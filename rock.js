// ROCK PAPER SCISSORS GAME
getcomputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);   
    return choices[random];
}
gethumanchoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    prompt("Enter Your Choice :" + choices);
}
console.log(getcomputerChoice());
console.log(gethumanchoice());
