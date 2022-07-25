const numCounter = document.querySelector('span');
const btnDecrease = document.querySelector('.decrease_button');
const btnReset = document.querySelector('.reset_button');
const btnIncrease = document.querySelector('.increase_button');

btnDecrease.addEventListener('click', decreaseCounter);
btnReset.addEventListener('click', resetCounter);
btnIncrease.addEventListener('click', increaseCounter);

let counter = 0;

function decreaseCounter() {
    //Decrease counter 
    if(counter == 0){
        counter = 0;
    } else {
        counter -= 1;
    }
    numCounter.innerText = counter;
}

function resetCounter() {
    //Reset counter
    counter = 0;
    numCounter.innerText = counter;
}

function increaseCounter(){
    //Increase Couter
    counter += 1;
    numCounter.innerText = counter;
}