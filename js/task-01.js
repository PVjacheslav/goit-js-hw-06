const listCategory = document.querySelectorAll(`.item`);
// console.dir(numbCateg);
console.log(`Number of categories: ${listCategory.length}`);

listCategory.forEach(function(list) {
    console.log(`Category:${list.firstElementChild.textContent}`);
    console.log(`Elements:${list.lastElementChild.children.length}`);
});
