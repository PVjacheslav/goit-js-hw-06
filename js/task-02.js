const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
const itemsIngredientsEl = [];

function listIngredientsEl(arr) {
  arr.map((item) => {
    const li = createElement("li");

    listli.classlist.add("item");
    listli.textContent = item;
    itemsIngredientsEl.push(listli);
  })
    .join("");
  listIngredients.append(...itemsIngredientsEl);
};
createItem(ingredients);