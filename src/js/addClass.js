function addClass(element,nameClass) {
  if(!element.style.display) {
    element.classList.add(nameClass);
  }
}

export default addClass;