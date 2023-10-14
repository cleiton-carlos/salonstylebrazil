export default function addClass(element) {
  if(!element.style.display) {
    element.classList.add('block');
  }
}