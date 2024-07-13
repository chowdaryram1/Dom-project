
function navSlide(){
    const nav=document.querySelector(".nav-bar")
    const menu=document.querySelector(".img-links")
    const burger=document.querySelector(".hamburger")

    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active")
        burger.classList.add("toggle")
    })
}

navSlide();

// const main = document.querySelector('.sec-5');
// const childDiv = document.querySelector('.sec-5-all-container');

// const imageDiv = document.querySelector('.trail');

// const image = document.querySelector('#img');
// image.addEventListener('click', ()=>{
//     console.log('clicked');
// image.classList.remove('sec-5-img');
// image.classList.add('sec5-image');

// })







