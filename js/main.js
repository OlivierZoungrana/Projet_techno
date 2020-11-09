'use strict'
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img')


const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let counter = 1;

const size= carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// bouton listeners
nextBtn.addEventListener( 'click', ()=>{

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=>{

    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
console.log(counter)
   
});


carouselSlide.addEventListener ('transitionend', ()=>{
    if (carouselImage[counter].id === 'lastclone'){

        carouselSlide.style.transition  = 'none';
        counter = carouselImage.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

carouselSlide.addEventListener ('transitionend', ()=>{
    if (carouselImage[counter].id === 'firstclone'){

        carouselSlide.style.transition  = 'none';
        counter = carouselImage.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

let btn = document.getElementById('toogle_btn')
const navbar = document.querySelector('#navbar')


btn.addEventListener("click", event=>{

    navbar.classList.toggle("is-visible");

})








