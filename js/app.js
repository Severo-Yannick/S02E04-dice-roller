// creation de la div
var diceElement = document.createElement('div');
// ajout de la classe dice à la div
diceElement.classList.add('dice');
// selection de l'id player et ajout de l'enfant diceElement
var playerElement = document.getElementById('player').appendChild(diceElement);