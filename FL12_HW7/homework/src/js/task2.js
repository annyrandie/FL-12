let isPlayGame = confirm('Do you want to play a game?');
let endRange = 8;
let totalPrize = 0;
const initialPrize = 100;
let currentPrize = initialPrize;
let possiblePrize = currentPrize;
let userAttempt = 0;
let gameOver = false;
const attempts = 3;
const DOUBLE_PRIZE = 2;
const DIVIDE_PRIZE = 2;
const ADD_POCKET = 4;

if (!isPlayGame) {
    alert('You did not become a billionaire, but can.' );
} else {
    let randomNum = Math.floor(Math.random() *(endRange + 1));
    console.log(randomNum);

    while (isPlayGame) {
        const answer = prompt(
            'Choose a roulette pocket number from 0 to ' + endRange + 
            '\nAttempts left: ' + (attempts - userAttempt) + 
            '\nTotal prize: ' + totalPrize + '$' +
            '\nPossible prize on current attempt: ' + currentPrize + '$', '');

        if (answer === null) {
            isPlayGame = false;
        }
        const answerNum = Number(answer);
        
        if (randomNum === answerNum) {
            totalPrize += currentPrize;

            const continueGame = confirm('Congratulation, you won! Your prize is: '
             + totalPrize +'$.' +' Do you want to continue?');
            if (continueGame) {
                possiblePrize *= DOUBLE_PRIZE;
                currentPrize = possiblePrize;
                endRange += ADD_POCKET;
                randomNum = Math.floor(Math.random() *(endRange + 1));
                console.log(randomNum);
                userAttempt = 0;
            } else {
                isPlayGame = false;
            }
        } else {
            userAttempt += 1;
            currentPrize = currentPrize / DIVIDE_PRIZE;

            if (userAttempt === attempts) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                const continueGame = confirm('Do you want to play again?');
                if (continueGame) {
                    userAttempt = 0;
                    currentPrize = initialPrize;
                } else {
                    isPlayGame = false;
                }
            }
        }
    }
    
}