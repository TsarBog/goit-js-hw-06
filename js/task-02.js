const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');


const items = ingredients.map(name => {
const li = document.createElement('li');
li.classList.add('item');
li.textContent = name;
return li;
})
console.log(items);
ulEl.append(...items)
