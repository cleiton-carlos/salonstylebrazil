import addClass from "./addClass.js";
import removeClass from "./removeClass.js";

const buttons = document.querySelectorAll('.services__buttonRead');
const services = document.querySelectorAll('.services__readMore');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const newImage = document.createElement('img');

buttons.forEach((button,index) => {
  button.addEventListener('click',() => {
    addClass(services[index],'block');
    body.classList.add('scrollNone');
    overlay.classList.add('block');
  })
})

document.querySelectorAll('.content__image').forEach((image) => {
  image.addEventListener('click',(event) => {
    newImage.classList.add('activeImage');
    newImage.src = event.target.src;
    body.appendChild(newImage);
    body.classList.add('scrollNone');
    overlay.classList.add('block');
  })
})

overlay.addEventListener('click', () => {
  services.forEach((service) => {
    removeClass(service,overlay,body);
  })
  body.removeChild(newImage);
})