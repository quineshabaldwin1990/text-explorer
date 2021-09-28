const prompt = require('prompt-sync')({ signit: true });


let x = -2;
let y = -2;

while (true) {

    const choice = prompt('Is this the right ship on base? Would you like to go [up] , [down] , [left] , [right] ?');


    if (choice === 'up') {
        console.log('Are we at the right ship? Would you like to climb "up", "right", "down", or "left" of the ladderbacks? ');
        y = y + 1;
    }

    else if (choice === 'down') {
        console.log('Are we at the right ship? Would you like to climb "up", "right", "down", or "left" of the ladderbacks?');
        y = y - 1;
    }

    else if (choice === 'left') {
        console.log('Are we at the right ship? Would you like to climb "up", "right", "down", or "left" of the ladderbacks?');
        x = x - 1;
    }

    else if (choice === 'right') {
        console.log('Are we at the right ship? Would you like to climb "up", "right", "down", or "left" of the ladderbacks?');
        x = x + 1;
    }

    else {
        console.log(' Are you positive? ');
    }

    console.log('Your coordinates:', x, 'x and', y, 'y on she ship');

    if (x === 2 && y === 2) {
        console.log('You made it on the ship');
    }




}