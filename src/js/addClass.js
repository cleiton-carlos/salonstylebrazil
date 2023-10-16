export default function addClass(element,nameClass) {
  if(!element.style.display) {
    element.classList.toggle(nameClass);
  }
}