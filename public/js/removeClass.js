export default function removeClass(...elements) {
  elements.forEach((element) => {
    element.classList.remove('block');
    element.classList.remove('scrollNone');
    element.classList.remove('activeImage');
    element.classList.remove('flex');
  })
}