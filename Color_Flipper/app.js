const background = document.querySelector('body');
const title = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const arrayColor = ['blue', 'yellow', 'black'];
    const randomColor = arrayColor[Math.floor(Math.random() * arrayColor.length)];

    title.innerHTML = `Background Color: ${randomColor}`;
    background.style.backgroundColor = randomColor;
    console.log(randomColor);
}


