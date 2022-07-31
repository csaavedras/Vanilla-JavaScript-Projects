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
randomTestimonials.addEventListener('click', randomContent);

// All Reviews
const reviews = [
    {
        id: 1,
        name: 'Jimmy Nilov',
        job: 'Frontend Developer',
        text: 'Creative Front-End Developer offering 9+ years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.',
        image: './pexels-juan-gomez-2589653.jpg',
    },
    {
        id: 2,
        name: 'Masha Raymers',
        job: 'UI/UX',
        text: 'A UX/UI Designer is a professional dedicated to finding an easy, intuitive, and friendly way to solve a problem based on the tastes, needs, and opinions of the users of a product or service. In other words, they’re the person in charge of designing the experience of a client and making sure it’s optimal.',
        image: './pexels-masha-raymers-2726111.jpg',
    },
    {
        id: 3,
        name: 'Sara Barret',
        job: 'Backend Developer',
        text: 'Backend developers work on databases, scripting languages, and website design to create the logic upon which websites and web app function. Tasks backend developers tackle include cloud computing  and API integration, security configurations, content management system deployment and maintenance and web server technologies. ',
        image: './pexels-pixabay-220453.jpg',
    },
    {
        id: 4,
        name: 'Andrea Psiacquadio',
        job: 'Full Stack Developer',
        text: 'You know the back end, you know the front end, and you know everything in the middle. This guide will help you show IT recruiters that you’re the best full stack dev for the job.',
        image: './pexels-andrea-piacquadio-3763152.jpg',
    },

]

// Setup Current Item
let currentItem = 0;

/* DOMContentLoaded */
window.addEventListener('DOMContentLoaded', function(){
    loadContent(currentItem);
})

function randomContent(){
    // Set random number
    let randomNumber = Math.floor(Math.random() * reviews.length);
    currentItem = randomNumber;
    loadContent(currentItem)
}

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
