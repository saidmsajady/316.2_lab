let result = confirm('Ya ready to play?!!!');

let message = result ? 'Lets go!!!' :
    'Too bad your playing anyways...';

alert(message);

alert('Welcome to my number guessing game!\nps. you will lose\n\nYou have 5 attempts to find the number.');

let number = Math.floor(Math.random() * 100) + 1;

alert(number);

for ( let i = 1; i <= 5; i++) {

    let inputNum = prompt ('Type a Number from 1-100');

    if (inputNum !== null) {
        inputNum = parseInt(inputNum);

        if (!isNaN(inputNum) && inputNum >= 1 && inputNum <= 100) {
            alert('You entered: ' + inputNum); 
        } else {
            alert('Invalid input. Bruh we said 1-100...'); 
            continue;
        }
    } else {
        alert('You canceled the game. Fine Byeee!'); 
        break;
    }

    if (inputNum === number) {
        switch (i) {
            case 1:
                alert(`You got it on the ${i}st try!`);
                break;

            case 2:
                alert(`You got it on the ${i}nd try!`);
                break;

            case 3:
                alert(`You got it on the ${i}rd try!`);
                break;

            default:
                alert(`You got it on the ${i}th try!`);
                break;
        }
        break;
        
    } else {
        if (inputNum < number) {
            alert(`Shoot higher!\nYou have ${5 - i} attempts left!`);
        } else if (inputNum > number) {
            alert(`Shoot lower!\nYou have ${5 - i} attempts left!`);
        } else {
            console.log(`Your 5 attempts are over, you lost... HA\nps. the correct answer was ${number}`);
        }
    }
}
