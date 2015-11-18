var prompt = require('prompt');
var bank = ['munificent', 'molify', 'scion', 'captious', 'auspice', 'inflection', 'paragon', 'pusilanimous', 'obdurate', 'contumacious'];
var answer = bank[Math.floor((Math.random() * 10) + 1)];
var total = answer.length;
var display = [];
var used = [];
var count = 0;

for (i = 0; i < total; i++) {
    display.push('_');
}

function handleGuess(letter) {
    var flag = false;
    for (i = 0; i < total; i++) {
        if (answer[i] === letter) {
            display[i] = letter;
        }
        else {
            flag = true;
        }
    }
    if (flag){
        used.push(letter);
        count +=1;
    }
    gallows();
}


function game() {
    prompt.start();

    prompt.get(['guess'], function(err, result) {
        if(count != 6 && display != answer.split()){
        handleGuess(result.guess);
        }
        game();
    });
}

begin();
game();


// start game
function begin() {
    console.log('__________  ' + display);
    console.log('|         |');
    console.log('|');
    console.log('|');
    console.log('|');
    console.log('|');
    console.log('|   BEGIN!');
}

//Gallows
function gallows() {
    console.log('__________  ' + display);
    console.log('|         |');
    console.log(count);
    if (count === 0){
    console.log('|');
    console.log('|');
    console.log('|');
    console.log('|');
    console.log('| Used: '+used);
    }
    else if (count === 1){
    console.log('|         O');
    console.log('|');
    console.log('|');
    console.log('|');
    console.log('| Used: '+used);
    }
    else if (count === 2){
    console.log('|         O');    
    console.log('|         |');
    console.log('|         |');
    console.log('|');
    console.log('| Used: '+used);
    }
    else if (count === 3){
    console.log('|         O');    
    console.log('|        \|');
    console.log('|         |');
    console.log('|');
    console.log('| Used: '+used);
    }
    else if (count === 4){
    console.log('|         O');    
    console.log('|        \|/');
    console.log('|         |');
    console.log('|');
    console.log('| Used: '+used);
    }
    else if (count === 5) {
    console.log('|         O ');
    console.log('|        \|/');
    console.log('|         | ');
    console.log('|        /  ');
    console.log('| Used: '+used);
    }
    else if (count === 6) {
    console.log('|         O ');
    console.log('|        \I/');
    console.log('|         I ');
    console.log('|        / \ ');
    console.log('| GAME OVER');
    }
}