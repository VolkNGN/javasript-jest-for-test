const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  element.classList.add('new-class'); // Ajoute la classe 'new-class' à l'élément
}

addButton.addEventListener('click', addClassToElement);
