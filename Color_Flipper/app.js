const background = document.querySelector('body');
const title = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const arr = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 255);
        arr.push(randomNumber);
    }
    title.innerHTML = `Background Color: RGB (${arr[0]}, ${arr[1]}, ${arr[2]})`;
    background.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    btn.style.backgroundColor = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}


