import addClass from "./addClass";
import removeClass from "./removeClass";

const buttons = document.querySelectorAll('.services__buttonRead');
const services = document.querySelectorAll('.services__readMore');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const newImage = document.createElement('img');

function classList() {
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
      newImage.classList.add('activeImageEffect');
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
    newImage.remove();
  })  
}

export default classList;