const imagePerfil = document.querySelector('img');
const nameTitle = document.querySelector('h3');
const jobTitle = document.querySelector('h4');
const testimonials = document.querySelector('.testimonials');

const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');
const randomTestimonials = document.querySelector('.randomTestimonials');

// AddEventListeners
leftBtn.addEventListener('click', prevButton);
rightBtn.addEventListener('click', nextButton);

const reviews = [
    {
        id: 1,
        name: 'Camilo Saavedra',
        job: 'Frontend Developer',
        text: 'Im baby meggings twee health goth +1- Bicycle rights tumeric charttreus before ther sold out',
        image: './perfil_cisaa.jpeg',
    },
    {
        id: 2,
        name: 'Paula Pereira',
        job: 'UI/UX',
        text: 'Im baby meggings twee health goth +1- Bicycle rights tumeric charttreus before ther sold out',
        image: './pexels-masha-raymers-2726111.jpg',
    },
    {
        id: 3,
        name: 'Romina Perez',
        job: 'Backend Developer',
        text: 'Im baby meggings twee health goth +1- Bicycle rights tumeric charttreus before ther sold out',
        image: './pexels-pixabay-220453.jpg',
    },
    {
        id: 4,
        name: 'Guillermo Salas',
        job: 'FullStack Developer',
        text: 'Im baby meggings twee health goth +1- Bicycle rights tumeric charttreus before ther sold out',
        image: './pexels-andrea-piacquadio-3763152.jpg',
    },

]

let currentItem = 0;
/* The DOMContentLoaded event fires when the initial 
   HTML document has been completely loaded and parsed, 
   without waiting for stylesheets, images, and subframes to finish loading.*/
window.addEventListener('DOMContentLoaded', function(){
    loadContent(currentItem);
})

function prevButton(){
 currentItem--;
 if(currentItem < 0){
    currentItem = reviews.length - 1;
 }
 loadContent(currentItem)
}
function nextButton(){
 currentItem++;
  if(currentItem > reviews.length -1) {
    currentItem = 0;
 }
 loadContent(currentItem)
}

function loadContent(content){
    const item = reviews[content];
    imagePerfil.src = item.image;
    nameTitle.textContent = item.name;
    jobTitle.textContent = item.job;
    testimonials.textContent = item.text;
}
