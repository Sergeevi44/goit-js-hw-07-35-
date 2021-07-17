const categoriesEl = document.querySelector('#categories');
const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

const showList = list => list.forEach(item =>
console.log(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`));
showList(itemsEl);