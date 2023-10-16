import addClass from "./addClass";
import removeClass from "./removeClass";

let navigation = document.querySelector('.navigation');
let body = document.querySelector('body');
let menuBack = document.querySelector('.menuBack');

document.querySelector('.header__buttonMenu').addEventListener('click',() => {
  addClass(navigation,'flex');
  addClass(body,'scrollNone');
  addClass(menuBack,'block');
})

menuBack.addEventListener('click',() => {
  removeClass(menuBack);
  removeClass(navigation);
  removeClass(body);
})