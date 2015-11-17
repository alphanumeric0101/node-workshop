var prompt = require('prompt');
var answer = Math.floor((Math.random() * 100) + 1);
var guesses = [];

function game(){
    prompt.start();

    prompt.get(['guess'], function(err, result) {

        if (result.guess === answer) {
            console.log('You are a wizard!');
        }
        
        else if (guesses.length === 4){
            console.log('Sorry. The number was ' + answer);
        }
        
        else {
            guesses.push(result.guess);
            console.log('Try Again');
            console.log('You have tried: ' + guesses);
            game();
        }
    });
}

console.log('A random number has been generated between 1 & 100');

game();